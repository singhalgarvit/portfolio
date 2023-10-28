$(document).ready(function(){
    $("#menuIcon").click(function(){
      $(".mobileUl").slideToggle(300);
      if($("#menuIcon").hasClass("fa-bars")){
        $("#menuIcon").removeClass("fa-bars").addClass("fa-times");
    } else {
        $("#menuIcon").removeClass("fa-times").addClass("fa-bars");
    }
    });
  });