global.doGet = (request: any): any => {
  //
  // https://developers.google.com/apps-script/guides/content#serving_json_from_scripts
  //
  var events = CalendarApp.getEvents(
    new Date(Number(request.parameters.start) * 1000),
    new Date(Number(request.parameters.end) * 1000),
  );
  var result = {
    available: events.length == 0,
  };
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
    ContentService.MimeType.JSON,
  );
};
