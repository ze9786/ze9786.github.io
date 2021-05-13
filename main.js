$(document).ready(function(){
    $('.header').height($(window).height());
    $("img").on("contextmenu",function(){
      return false;
   }); 
  })

  function moreBtn(){
      location.href='about.html';
    }


  function goToHome(){
      location.href="index.html";
  }

  function goToWork(){
    location.href="work.html";
}