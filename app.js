function doGet() {
  var html = HtmlService.createHtmlOutputFromFile("index");
  return html;
}
// 1W6XKxYraHlrpzXeJDTV86uSkdJRJkDXv id
function enviarLink(link2, nameValue, idadeValue) {
  var rowData = [link2, nameValue, idadeValue];
  SpreadsheetApp.getActive().getSheetByName("DATA").appendRow(rowData);
}

function uploadFileInGoogleDrive(data, name, type) {
  var datafile = Utilities.base64Decode(data);
  var blob2 = Utilities.newBlob(datafile, type, name);
  var folder = DriveApp.getFolderById("1W6XKxYraHlrpzXeJDTV86uSkdJRJkDXv");
  var newFile = folder.createFile(blob2);
  return newFile.getUrl();
}

function writeInSheet(nameValue, idadeValue) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DATA");
  var rowData = [nameValue, idadeValue];
  sheet.appendRow(rowData);
}
