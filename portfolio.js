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