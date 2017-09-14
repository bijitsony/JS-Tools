// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  var floorValue = Math.floor(number);
  return floorValue;
};

// Following functions calculate the arc length / arc raduis / centre angle of an arc

// Function for calculating arc length
function inchTo() {
  // Taking input
  var a = document.getElementById('inputInch').valueAsNumber;

  // inch to ft

  var inFt = (a / 12);
  var inIn = (a % 12);
  var inchToFtIn = toInteger(Math.abs(inFt)) + "\'" + toInteger(Math.abs(inIn)) + "\"";
  // Appending result
  document.getElementById('inputFt').value = inchToFtIn;

  // inch to mm

  var inMm = (a * 25.4);
  var inchToMm = Math.abs(inMm);
  document.getElementById('inputMm').value = inchToMm;

  // inch to cm

  var inCm = (a * 2.54);
  var inchToCm = Math.abs(inCm);
  document.getElementById('inputCm').value = inchToCm;

  // inch to m

  var inM = (a * 0.0254);
  var inchToM = Math.abs(inM);
  document.getElementById('inputM').value = inchToM;

};


function mmTo() {
  // Taking input
  var a = document.getElementById('inputMm').valueAsNumber;

  // mm to in

  var cmIn = (a * 0.0393701);
  var cmToIn = Math.abs(cmIn);
  document.getElementById('inputInch').value = cmToIn;

  // inch to ft

  var inFt = (a / 12);
  var inIn = (a % 12);
  var inchToFtIn = toInteger(Math.abs(inFt)) + "\'" + toInteger(Math.abs(inIn)) + "\"";
  // Appending result
  document.getElementById('inputFt').value = inchToFtIn;

  // inch to cm

  var inCm = (a * 2.54);
  var inchToCm = Math.abs(inCm);
  document.getElementById('inputCm').value = inchToCm;

  // inch to m

  var inM = (a * 0.0254);
  var inchToM = Math.abs(inM);
  document.getElementById('inputM').value = inchToM;

};
