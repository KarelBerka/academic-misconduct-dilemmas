/**
 * Google Apps Script Backend for Academic Misconduct Dilemmas / Trestní Dilemata
 * 
 * Instructions:
 * 1. Create a new Google Sheet at https://sheets.new
 * 2. In the menu, go to Extensions -> Apps Script
 * 3. Replace Code.gs with this entire script
 * 4. Click "Deploy" -> "New deployment"
 * 5. Select type: "Web app"
 * 6. Set "Execute as": "Me"
 * 7. Set "Who has access": "Anyone"
 * 8. Deploy and copy the Web App URL (format: https://script.google.com/macros/s/.../exec)
 * 9. Paste this URL into config.js as `googleAppScriptUrl`
 */

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Sheet 1: Individual vote logs
  let votesSheet = ss.getSheetByName("votes");
  if (!votesSheet) {
    votesSheet = ss.insertSheet("votes");
    votesSheet.appendRow(["Timestamp", "Winner ID", "Loser ID", "Session ID"]);
    votesSheet.setFrozenRows(1);
  }

  // Sheet 2: Pre-aggregated scores (Elo & Win/Match counts)
  let scoresSheet = ss.getSheetByName("scores");
  if (!scoresSheet) {
    scoresSheet = ss.insertSheet("scores");
    scoresSheet.appendRow(["Crime ID", "Elo", "Wins", "Matches"]);
    scoresSheet.setFrozenRows(1);
  }
}

// GET: Returns pre-computed scores and total votes count in JSON
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let votesSheet = ss.getSheetByName("votes");
    let scoresSheet = ss.getSheetByName("scores");

    if (!votesSheet || !scoresSheet) {
      setupSheet();
      votesSheet = ss.getSheetByName("votes");
      scoresSheet = ss.getSheetByName("scores");
    }

    const totalVotes = Math.max(0, votesSheet.getLastRow() - 1);

    const scores = {};
    const scoresData = scoresSheet.getDataRange().getValues();
    for (let i = 1; i < scoresData.length; i++) {
      const row = scoresData[i];
      const id = row[0];
      if (id) {
        scores[id] = {
          elo: Number(row[1]) || 1500,
          wins: Number(row[2]) || 0,
          matches: Number(row[3]) || 0
        };
      }
    }

    const response = {
      status: "success",
      totalVotes: totalVotes,
      scores: scores
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// POST: Records a duel decision and updates Elo rating incrementally
function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    const winnerId = data.winner_id;
    const loserId = data.loser_id;
    const sessionId = data.session_id || "anonymous";

    if (!winnerId || !loserId) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Missing winner_id or loser_id" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let votesSheet = ss.getSheetByName("votes");
    let scoresSheet = ss.getSheetByName("scores");

    if (!votesSheet || !scoresSheet) {
      setupSheet();
      votesSheet = ss.getSheetByName("votes");
      scoresSheet = ss.getSheetByName("scores");
    }

    // 1. Record individual vote log
    votesSheet.appendRow([new Date(), winnerId, loserId, sessionId]);

    // 2. Update Elo in scores sheet
    const scoresData = scoresSheet.getDataRange().getValues();
    let winnerRowIdx = -1;
    let loserRowIdx = -1;
    let winnerElo = 1500, winnerWins = 0, winnerMatches = 0;
    let loserElo = 1500, loserWins = 0, loserMatches = 0;

    for (let i = 1; i < scoresData.length; i++) {
      if (scoresData[i][0] === winnerId) {
        winnerRowIdx = i + 1;
        winnerElo = Number(scoresData[i][1]) || 1500;
        winnerWins = Number(scoresData[i][2]) || 0;
        winnerMatches = Number(scoresData[i][3]) || 0;
      }
      if (scoresData[i][0] === loserId) {
        loserRowIdx = i + 1;
        loserElo = Number(scoresData[i][1]) || 1500;
        loserWins = Number(scoresData[i][2]) || 0;
        loserMatches = Number(scoresData[i][3]) || 0;
      }
    }

    // Elo rating update (k-factor 24)
    const kFactor = 24;
    const expWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const newWinnerElo = Math.round(winnerElo + kFactor * (1 - expWinner));
    const newLoserElo = Math.round(loserElo + kFactor * (0 - (1 - expWinner)));

    if (winnerRowIdx > 0) {
      scoresSheet.getRange(winnerRowIdx, 2, 1, 3).setValues([[newWinnerElo, winnerWins + 1, winnerMatches + 1]]);
    } else {
      scoresSheet.appendRow([winnerId, newWinnerElo, 1, 1]);
    }

    if (loserRowIdx > 0) {
      scoresSheet.getRange(loserRowIdx, 2, 1, 3).setValues([[newLoserElo, loserWins, loserMatches + 1]]);
    } else {
      scoresSheet.appendRow([loserId, newLoserElo, 0, 1]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
