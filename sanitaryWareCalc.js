window.onload = function() {

  $('#buildingType').on('change', function() {
    //  alert( this.value ); // or $(this).val()
    if (this.value == "business") {
      $('#business').show();
      $('#industrial,#educational,#special').hide();
    } else if (this.value == "industrial") {
      $('#industrial').show();
      $('#business,#educational,#special').hide();
    } else if (this.value == "educational") {
      $('#educational').show();
      $('#business,#industrial,#special').hide();
    } else if (this.value == "special") {
      $('#special').show();
      $('#business,#industrial,#educational').hide();
    } else {
      $('#business,#industrial,#educational,#special').hide();
      document.getElementById('selectionErr').innerHTML = "Please select any of options";
    }
  });
};

//Calculating Sanitry Ware for Educational building types
function educationalType() {
  var calcPax = function(){
    // Taking input
    var a = document.getElementById('carpetArea-educational').valueAsNumber;
    // Calculating Number of People
    var result = (a / 1);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var calcMale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-educational').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-educational').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function(){
    // Calculating Number of Urinals
    if (calcMale() > 0 && calcMale() <= 250) {
      var positiveResult = 5;
    } else if (calcMale() > 250) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCMale = function(){
    // Calculating Number of WC for Male
    if (calcMale() > 0 && calcMale() <= 400){
      var positiveResult = 2;
    } else if (calcMale() > 400) {
      var result = calcMale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCFemale = function(){
    // Calculating Number of WC for Male
    if (calcFemale() > 0 && calcFemale() <= 400){
      var positiveResult = 2;
    } else if (calcFemale() > 400) {
      var result = calcFemale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var resultSanitaryWare = function(){
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale();
  };

  return resultSanitaryWare();
};

//Calculating Sanitry Ware for Business building types
function businessType() {
  var calcPax = function(){
    // Taking input
    var a = document.getElementById('carpetArea-business').valueAsNumber;
    // Calculating Number of People
    var result = (a / 4);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var calcMale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-business').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-business').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function(){
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

  var calcWCMale = function(){
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

  var calcWCFemale = function(){
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

  var resultSanitaryWare = function(){
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale();
  };

  return resultSanitaryWare();
};

//Calculating Sanitry Ware for Industrial & Storage building types
function industrialType() {
  var calcPax = function(){
    // Taking input
    var a = document.getElementById('carpetArea-industrial').valueAsNumber;
    // Calculating Number of People
    var result = (a / 25);
    var positiveResult = Math.abs(result);

    return positiveResult;
  };

  var calcMale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-industrial').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-industrial').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function(){
    // Calculating Number of Urinals
    if (calcMale() > 0 && calcMale() <= 100) {
      var result = calcMale() / 100;
      var positiveResult = Math.ceil(result);
    } else if (calcMale() > 100) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCMale = function(){
    // Calculating Number of WC for Male
    if (calcMale() > 0 && calcMale() <= 100){
      var result = calcMale() / 25;
      var positiveResult = Math.ceil(result);
    } else if (calcMale() > 100) {
      var result = calcMale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCFemale = function(){
    // Calculating Number of WC for Male
    if (calcFemale() > 0 && calcFemale() <= 100){
      var result = calcFemale() / 25;
      var positiveResult = Math.ceil(result);
    } else if (calcFemale() > 100) {
      var result = calcFemale() / 50;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var resultSanitaryWare = function(){
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "WC for Female:" + calcWCFemale() + "<br/>" + "Wash Area: 4 m²";
  };

  return resultSanitaryWare();
};

//Calculating Sanitry Ware for Special building types
function specialType() {
  var calcPax = function(){
    // Taking input
    var a = document.getElementById('seats-special').valueAsNumber;
    // Calculating Number of People
    var positiveResult = a;

    return positiveResult;
  };

  var calcMale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-special').valueAsNumber;
    var result = (a / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcFemale = function(){
    // Calculating Number of Male
    var a = document.getElementById('percentageOfMale-special').valueAsNumber;
    var result = ((100 - a) / 100) * calcPax();
    var positiveResult = Math.ceil(result);

    return positiveResult;
  };

  var calcUrinals = function(){
    // Calculating Number of Urinals
    if (calcMale() > 0) {
      var result = (calcMale() / 75) * 2;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCMale = function(){
    // Calculating Number of WC for Male
    if (calcMale() > 0) {
      var result = calcMale() / 100;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWBMale = function(){
    // Calculating Number of WC for Male
    if (calcMale() > 0) {
      var result = calcMale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWCFemale = function(){
    // Calculating Number of WC for Male
    if (calcFemale() > 0) {
      var result = calcFemale() / 100;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var calcWBFemale = function(){
    // Calculating Number of WC for Male
    if (calcFemale() > 0) {
      var result = calcFemale() / 200;
      var positiveResult = Math.ceil(result);
    } else {
      var positiveResult = 0;
    }

    return positiveResult;
  };

  var resultSanitaryWare = function(){
    // Declaring Result
    document.getElementById('resultSanitaryWare').innerHTML = "Urinals: " + calcUrinals() + "<br/>" + "WC for Male:" + calcWCMale() + "<br/>" + "Wash Basins for Male:" + calcWBMale() + "<br/>" + "WC for Female:" + calcWCFemale() + "<br/>" + "Wash Basins for Female:" + calcWBFemale();
  };

  return resultSanitaryWare();
};
