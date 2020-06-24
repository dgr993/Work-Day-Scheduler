var todaytext = document.querySelector("h2");

moment().format('MMMM Do YYYY, h:mm:ss a');


(function () {
  // instantiate a moment object
  var NowMoment = moment().format('dddd, MMMM Do YYYY');

  // display value of moment object in #displayMoment div
  var currentDay = document.getElementById('currentDay');
  currentDay.innerHTML = NowMoment;
  document.getElementById("currentDay").style.textAlign = "center";
  todaytext.style.textAlign = "center";

})();
//Changing color of the text area for past present and future times.
      //grab current hour in moment.js
      var currentHour = moment().hour();

      //set each textarea to its time on a 24hr clock
      var hour9text = document.querySelector(".hour9text")
      var hour9text = 9;
      var hour10text = document.querySelector(".hour10text")
      var hour10text = 10;
      var hour11text = document.querySelector(".hour11text")
      var hour11text = 11;
      var hour12ext = document.querySelector(".hour12text")
      var hour12text = 12;
      var hour1text = document.querySelector(".hour1text")
      var hour1text = 13;
      var hour2text = document.querySelector(".hour2text")
      var hour2text = 14;
      var hour3text = document.querySelector(".hour3text")
      var hour3text = 15;
      var hour4text = document.querySelector(".hour4text")
      var hour4text = 16;
      var hour5text = document.querySelector(".hour5text")
      var hour5text = 17;
      //change color of text area for past present and future for 9AM
      if (hour9text < currentHour) {
        document.querySelector(".hour9text").style.background = "lightyellow"
        console.log(hour9text)
        console.log(currentHour)
      }
      else if (hour9text === currentHour) {
        document.querySelector(".hour9text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour9text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 10AM
      if (hour10text < currentHour) {
        document.querySelector(".hour10text").style.background = "lightyellow"
        console.log(hour10text)
        console.log(currentHour)
      }
      else if (hour10text === currentHour) {
        document.querySelector(".hour10text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour10text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 11AM
      if (hour11text < currentHour) {
        document.querySelector(".hour11text").style.background = "lightyellow"
        console.log(hour11text)
        console.log(currentHour)
      }
      else if (hour11text === currentHour) {
        document.querySelector(".hour11text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour11text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 12PM
      if (hour12text < currentHour) {
        document.querySelector(".hour12text").style.background = "lightyellow"
        console.log(hour12text)
        console.log(currentHour)
      }
      else if (hour12text === currentHour) {
        document.querySelector(".hour12text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour12text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 1PM
      if (hour1text <= currentHour) {
        document.querySelector(".hour1text").style.background = "lightyellow"
        console.log(hour1text)
        console.log(currentHour)
      }
      else if (hour1text === currentHour) {
        document.querySelector(".hour1text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour1text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 2PM
      if (hour2text < currentHour) {
        document.querySelector(".hour2text").style.background = "lightyellow"
        console.log(hour2text)
        console.log(currentHour)
      }
      else if (hour2text === currentHour) {
        document.querySelector(".hour2text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour2text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 3PM
      if (hour3text < currentHour) {
        document.querySelector(".hour3text").style.background = "lightyellow"
        console.log(hour3text)
        console.log(currentHour)
      }
      else if (hour3text === currentHour) {
        document.querySelector(".hour3text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour3text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 4PM
      if (hour4text < currentHour) {
        document.querySelector(".hour4text").style.background = "lightyellow"
        console.log(hour4text)
        console.log(currentHour)
      }
      else if (hour4text === currentHour) {
        document.querySelector(".hour4text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour4text").style.background = "lightgray"
      }
      //change color of text area for past present and future for 5PM
      if (hour5text < currentHour) {
        document.querySelector(".hour5text").style.background = "lightyellow"
        console.log(hour5text)
        console.log(currentHour)
      }
      else if (hour5text === currentHour) {
        document.querySelector(".hour5text").style.background = "lightblue"
      }
      else {
        document.querySelector(".hour5text").style.background = "lightgray"
      }
      


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