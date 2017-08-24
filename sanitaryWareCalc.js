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
  // Calculating Number of People
  var result = (a / 4);
  var positiveResult = Math.abs(result);

  return positiveResult;
};

function calcMale() {
  // Calculating Number of Male
  var a = document.getElementById('percentageOfMale').valueAsNumber;
  var result = (a / 100) * calcPax();
  var positiveResult = Math.ceil(result);

  return positiveResult;
};

function calcFemale() {
  // Calculating Number of Male
  var a = document.getElementById('percentageOfMale').valueAsNumber;
  var result = ((100 - a) / 100) * calcPax();
  var positiveResult = Math.ceil(result);

  return positiveResult;
};

function calcUrinals() {
  // Calculating Number of Urinals
  if (calcMale() > 0 && calcMale() < 20) {
    var positiveResult = 1;
  } else if (calcMale() > 20 && calcMale() <= 100) {
    var result = calcMale() / 25;
    var positiveResult = Math.ceil(result);
  } else if (calcMale() > 100 && calcMale() <= 500) {
    var result = calcMale() / 50;
    var positiveResult = Math.ceil(result);
  } else if (calcMale() > 500) {
    var result = calcMale() / 50;
    var positiveResult = Math.ceil(result);
  } else {
    var positiveResult = 0;
  }

  return positiveResult;
};

function calcWCMale() {
  // Calculating Number of WC for Male
  if (calcMale() > 0 && calcMale() < 20){
    var positiveResult = 1;
  } else if (calcMale() > 20 && calcMale() <= 100) {
    var result = calcMale() / 25;
    var positiveResult = Math.ceil(result);
  } else if (calcMale() > 100 && calcMale() <= 500) {
    var result = calcMale() / 50;
    var positiveResult = Math.ceil(result);
  } else if (calcMale() > 500) {
    var result = calcMale() / 100;
    var positiveResult = Math.ceil(result);
  } else {
    var positiveResult = 0;
  }

  return positiveResult;
};

function calcWCFemale() {
  // Calculating Number of WC for Male
  if (calcFemale() > 0 && calcFemale() < 20){
    var positiveResult = 1;
  } else if (calcFemale() > 20 && calcFemale() <= 100) {
    var result = calcFemale() / 25;
    var positiveResult = Math.ceil(result);
  } else if (calcFemale() > 100 && calcFemale() <= 500) {
    var result = calcFemale() / 50;
    var positiveResult = Math.ceil(result);
  } else if (calcFemale() > 500) {
    var result = calcFemale() / 100;
    var positiveResult = Math.ceil(result);
  } else {
    var positiveResult = 0;
  }

  return positiveResult;
};

function resultSanitaryWare() {
  // Declaring Result
  document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale();
};
