window.onload = function() {

  $('#this').on('change', function() {
    //  alert( this.value ); // or $(this).val()
    if (this.value == "arcLength") {
      $('#div1').show();
      $('#div2,#div3').hide();
    } else if (this.value == "arcRadius") {
      $('#div2').show();
      $('#div1,#div3').hide();
    } else if (this.value == "centreAngle") {
      $('#div3').show();
      $('#div1,#div2').hide();
    } else {
      $('#div1,#div2,#div3').hide();
      document.getElementById('selectionMsg').innerHTML = "Please select any of options";
    }
  });
};

function resultArcLength() {
  // Taking input
  var a = document.getElementById('inputRadius').valueAsNumber;
  var b = document.getElementById('inputAngle').valueAsNumber;
  // Calculating Arc Length
  var result = 2 * Math.PI *a * (b / 360);
  var positiveResult = Math.abs(result);

  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}

function resultArcRadius() {
  // Taking input
  var a = document.getElementById('inputArcLength').valueAsNumber;
  var b = document.getElementById('inputAngle2').valueAsNumber;
  // Calculating Arc Length
  var result = (a * 360) / (2 * Math.PI * b);
  var positiveResult = Math.abs(result);

  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}

function resultCentreAngle() {
  // Taking input
  var a = document.getElementById('inputArcLength2').valueAsNumber;
  var b = document.getElementById('inputRadius2').valueAsNumber;
  // Calculating Arc Length
  var result = (a * 360) / (2 * Math.PI * b);
  var positiveResult = Math.abs(result);

  document.getElementById('arcValue').innerHTML = "The result is: " + positiveResult;
}
