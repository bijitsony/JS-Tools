// Following function takes a numebrs and returns a rounded off number
function toInteger(number) {
  // Making float to show 2 decimal places
  var floorValue = Math.floor(number);
  return floorValue;
};

// Following functions calculate the arc length / arc raduis / centre angle of an arc

// Run script on page load
window.onload = function() {

  // Following are the loops for hiding / showing particular divisitions on option selection
  $('#this').on('change', function() {
    if (this.value == "arcLength") {
      $('#div1').show();
      $('#div2,#div3,#selectionMsg').hide();
    } else if (this.value == "arcRadius") {
      $('#div2').show();
      $('#div1,#div3,#selectionMsg').hide();
    } else if (this.value == "centreAngle") {
      $('#div3').show();
      $('#div1,#div2,#selectionMsg').hide();
    } else {
      $('#selectionMsg').show();
      $('#div1,#div2,#div3').hide();
      document.getElementById('selectionMsg').innerHTML = "Please select any of options";
    }
  });
};

// Function for calculating arc length
function resultArcLength() {
  // Taking input
  var a = document.getElementById('inputRadius').valueAsNumber;
  // Calculating Arc Length
  var result1 = (a/12);
  var result2 = (a%12);
  var positiveResult = toInteger(Math.abs(result1)) + "\'" + toInteger(Math.abs(result2)) + "\"";
  // Appending result
  document.getElementById('rrr').innerHTML = positiveResult;
}

// Function for calculating arc radius
function resultArcRadius() {
  // Taking input
  var a = document.getElementById('inputArcLength').valueAsNumber;
  var b = document.getElementById('inputAngle2').valueAsNumber;
  // Calculating Arc Radius
  var result = (a * 360) / (2 * Math.PI * b);
  var positiveResult = toInteger(Math.abs(result));
  // Appending result
  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}

// Function for calculating arc radius
function resultCentreAngle() {
  // Taking input
  var a = document.getElementById('inputArcLength2').valueAsNumber;
  var b = document.getElementById('inputRadius2').valueAsNumber;
  // Calculating Centre Angle
  var result = (a * 360) / (2 * Math.PI * b);
  var positiveResult = toInteger(Math.abs(result));
  // Appending result
  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}
