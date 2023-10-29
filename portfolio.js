$(document).ready(function(){
    $("#menuIcon").click(function(){
      $(".mobileUl").slideToggle(500);
      if($("#menuIcon").hasClass("fa-bars")){
        $("#menuIcon").removeClass("fa-bars").addClass("fa-times");
    } else {
        $("#menuIcon").removeClass("fa-times").addClass("fa-bars");
    }
    });
  });

  const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show');
        }
    })
  })

  const hiddenItems=document.querySelectorAll(".hidden");
  hiddenItems.forEach((el)=>observer.observe(el));

  var i = 0;
  var txt = '! am Garvit Singhal';
  
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("elem").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

var prevScrollpos = window.scrollY || document.documentElement.scrollTop;
window.onscroll = function() {
    let hgt = window.innerHeight;
    var currentScrollPos = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollPos > hgt) {
        document.getElementsByClassName("nav")[0].style.backgroundColor = "#696272";
    } else {
        document.getElementsByClassName("nav")[0].style.backgroundColor = "transparent";
    }

    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("nav")[0].style.top = "0";
    } else {
        document.getElementsByClassName("nav")[0].style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}


  