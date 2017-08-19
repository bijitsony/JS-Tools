window.onload = function() {

  $('#buildingType').on('change', function() {
    //  alert( this.value ); // or $(this).val()
    if (this.value == "commercial") {
      $('#commercial').show();
      $('#industrial,#institutional').hide();
    } else if (this.value == "industrial") {
      $('#industrial').show();
      $('#commercial,#institutional').hide();
    } else if (this.value == "institutional") {
      $('#institutional').show();
      $('#commercial,#industrial').hide();
    } else {
      $('#commercial,#industrial,#institutional').hide();
      document.getElementById('selectionErr').innerHTML = "Please select any of options";
    }
  });
};

function calcPax() {
  // Taking input
  var a = document.getElementById('carpetArea').valueAsNumber;
  // Calculating Arc Length
  var result = (a / 4);
  var positiveResult = Math.abs(result);

  return positiveResult;
}

function calcMale() {
  // Taking input
  var a = document.getElementById('percentageOfMale').valueAsNumber;
  var result = (a / 100) * calcPax();
  var positiveResult = Math.ceil(result);

  return positiveResult;
}

function calcFemale() {
  // Taking input
  var a = document.getElementById('percentageOfMale').valueAsNumber;
  var result = ((100 - a) / 100) * calcPax();
  var positiveResult = Math.ceil(result);

  return positiveResult;
}

function calcUrinals() {

  var result = calcMale() / 10;
  var positiveResult = Math.ceil(result);

  return positiveResult;
}

function calcWCMale() {

  var result = calcMale() / 50;
  var positiveResult = Math.ceil(result);

  return positiveResult;
}

function calcWCFemale() {

  var result = calcFemale() / 50;
  var positiveResult = Math.ceil(result);

  return positiveResult;
}

function resultSanitaryWare() {

  document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale();
}
