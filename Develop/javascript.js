var todaytext = document.querySelector("h2");

moment().format('MMMM Do YYYY, h:mm:ss a');


(function()
{
  // instantiate a moment object
  var NowMoment = moment().format('dddd, MMMM Do YYYY');
  
  // display value of moment object in #displayMoment div
  var currentDay = document.getElementById('currentDay');
  currentDay.innerHTML = NowMoment;
  document.getElementById("currentDay").style.textAlign="center";
  todaytext.style.textAlign="center";

})();



// var NowDate = new Date();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var sDay = NowDate.getDate();
// var sMonth = NowDate.getMonth() + 1;
// var sYear = NowDate.getFullYear();
// var eDisplayDate = document.getElementById('displayJsDate');
// eDisplayDate.innerHTML = sYear+'-'+sMonth+'-'+sDay;

// var NowMoment = moment();
// var eDisplayMoment = document.getElementById('displayMoment');
// eDisplayMoment.innerHTML = NowMoment.format('YYYY-M-D');