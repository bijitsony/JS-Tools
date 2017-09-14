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

  var mmIn = (a * 0.0393701);
  var mmToIn = Math.abs(mmIn);
  document.getElementById('inputInch').value = mmToIn;

  // mm to ft

  var inFt = (a / 12);
  var inIn = (a % 12);
  var inchToFtIn = toInteger(Math.abs(inFt)) + "\'" + toInteger(Math.abs(inIn)) + "\"";
  // Appending result
  document.getElementById('inputFt').value = inchToFtIn;

  // mm to cm

  var mmCm = (a * 0.1);
  var mmToCm = Math.abs(mmCm);
  document.getElementById('inputCm').value = mmToCm;

  // mm to m

  var mmM = (a * 0.001);
  var mmToM = Math.abs(mmM);
  document.getElementById('inputM').value = mmToM;

};


function cmTo() {
  // Taking input
  var a = document.getElementById('inputCm').valueAsNumber;

  // cm to in

  var cmIn = (a * 0.393701);
  var cmToIn = Math.abs(cmIn);
  document.getElementById('inputInch').value = cmToIn;

  // cm to ft

  var inFt = (a / 12);
  var inIn = (a % 12);
  var inchToFtIn = toInteger(Math.abs(inFt)) + "\'" + toInteger(Math.abs(inIn)) + "\"";
  // Appending result
  document.getElementById('inputFt').value = inchToFtIn;

  // cm to mm

  var cmMm = (a * 10);
  var cmToMm = Math.abs(cmMm);
  document.getElementById('inputMm').value = cmToMm;

  // cm to m

  var cmM = (a * 0.01);
  var cmToM = Math.abs(cmM);
  document.getElementById('inputM').value = cmToM;

};


function mTo() {
  // Taking input
  var a = document.getElementById('inputM').valueAsNumber;

  // m to in

  var mIn = (a * 39.3701);
  var mToIn = Math.abs(mIn);
  document.getElementById('inputInch').value = mToIn;

  // m to ft

  var inFt = (a / 12);
  var inIn = (a % 12);
  var inchToFtIn = toInteger(Math.abs(inFt)) + "\'" + toInteger(Math.abs(inIn)) + "\"";
  // Appending result
  document.getElementById('inputFt').value = inchToFtIn;

  // m to mm

  var mMm = (a * 1000);
  var mToMm = Math.abs(mMm);
  document.getElementById('inputMm').value = mToMm;

  // m to cm

  var mCm = (a * 100);
  var mToCm = Math.abs(mCm);
  document.getElementById('inputCm').value = mToCm;

};
