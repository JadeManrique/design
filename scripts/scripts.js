$(document).ready(function () {



  $(".team").animate({"opacity": "1.0"}, 1000);
  $(".team img").animate({"border-radius": "25px", "width": "500px"}, 1000);

  var textfield = $("#question");

  $( "#question" ).keypress(function(e) {
  if ((e.keyCode || e.which) == 13) {
    window.location.assign("http://www.google.com/search?q=" + textfield.val());
  }


});

});
