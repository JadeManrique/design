$(document).ready(function () {



  $(".team").animate({"opacity": "1.0"}, 1000);
  $(".team img").animate({"border-radius": "25px", "width": "500px"}, 1000);


  $(".box").hover( function () {

    $(this).animate({opacity: 1.0}, 150);

  }, function() {

    $(this).animate({opacity: 0.5}, 150);

  });

  $(".team img").hover( function () {

    $(this).animate({"border-radius": "0px", width: "510px"}, 150);

  }, function() {

    $(this).animate({"border-radius": "25px", width: "500px"}, 150);

  });




});
