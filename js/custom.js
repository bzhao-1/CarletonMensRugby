
/*----------- CUSTOM JS SCRIPTS -----------*/

(function($) {
  'use strict';
  $(function() {
    // Code here executes When the DOM is loaded...
  });
  $(window).on('load', function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Apr 1, 2023 00:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the countdown date
      var distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with the corresponding id
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  });
}(jQuery));