function doPost(s) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Preview'); //In place of the preview add the sheet name of you google sheets.
    const value = JSON.parse(s.postData.contents);


    //append Row in proper sequence of the sheets column.
    sheet.appendRow([
      value.journey,
      value.des,
      value.screenshot,
      value.reportedBy
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


function doGet() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Preview');
    const values = sheet.getDataRange().getValues();

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", response: values }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
