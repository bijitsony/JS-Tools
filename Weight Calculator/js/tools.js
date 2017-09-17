function mmToM(number) {
  var m = (number)/1000
  return m;
}


function weightCalc() {
  // Taking input
  var a = document.getElementById('inputX').valueAsNumber;
  var b = document.getElementById('inputY').valueAsNumber;
  var c = document.getElementById('inputZ').valueAsNumber;
  var d = document.getElementById('inputG').valueAsNumber;

  // inch to ft-in

  var volume = (mmToM(a) * mmToM(b) * c * d);
  // Appending result
  document.getElementById('weightValue').innerHTML = "Weight: " + volume + " " + "kg";

};
