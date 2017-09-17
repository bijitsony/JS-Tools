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

  // inch to ft-in

  var inFt = toInteger(a / 12);
  var inIn = (a % 12);
  // Appending result
  document.getElementById('inputFt').value = inFt;
  document.getElementById('inputFtIn').value = inIn;

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

function ftInchTo() {
  // Taking input
  var a = document.getElementById('inputFt').valueAsNumber;
  var b = document.getElementById('inputFtIn').valueAsNumber;

  // ft-in to inch

  var ftToIn = Math.abs(a * 12);
  var inToIn = Math.abs(b);
  var ftInToIn = ftToIn + inToIn;
  document.getElementById('inputInch').value = ftInToIn;

  // ft-in to mm

  var ftToMm = Math.abs(a * 304.8);
  var inToMm = Math.abs(b * 25.4);
  var ftInToMm = ftToMm + inToMm;
  document.getElementById('inputMm').value = ftInToMm;

  // ft-in to cm

  var ftToCm = Math.abs(a * 30.48);
  var inToCm = Math.abs(b * 2.54);
  var ftInToCm = ftToCm + inToCm;
  document.getElementById('inputCm').value = ftInToCm;

  // ft-in to m

  var ftToM = Math.abs(a * 0.3048);
  var inToM = Math.abs(b * 0.0254);
  var ftInToM = ftToM + inToM;
  document.getElementById('inputM').value = ftInToM;

};


function mmTo() {
  // Taking input
  var a = document.getElementById('inputMm').valueAsNumber;

  // mm to in

  var mmIn = (a * 0.0393701);
  var mmToIn = Math.abs(mmIn);
  document.getElementById('inputInch').value = mmToIn;

  // mm to ft-in

  var mmFt = toInteger(a / 304.8); // 1 ft = 304.8 mm
  var mmFtIn = (a * 0.0393701) % 12; // 1 mm = 0.0393701 inch
  // Appending result
  document.getElementById('inputFt').value = mmFt;
  document.getElementById('inputFtIn').value = mmFtIn;

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

  // cm to ft-in

  var cmFt = toInteger(a / 30.48);
  var cmFtIn = (a * 0.393701) % 12;
  // Appending result
  document.getElementById('inputFt').value = cmFt;
  document.getElementById('inputFtIn').value = cmFtIn;

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

  // m to ft-in

  var mFt = toInteger(a / 0.3048);
  var mFtIn = (a * 39.3701) % 12;
  // Appending result
  document.getElementById('inputFt').value = mFt;
  document.getElementById('inputFtIn').value = mFtIn;

  // m to mm

  var mMm = (a * 1000);
  var mToMm = Math.abs(mMm);
  document.getElementById('inputMm').value = mToMm;

  // m to cm

  var mCm = (a * 100);
  var mToCm = Math.abs(mCm);
  document.getElementById('inputCm').value = mToCm;

};
