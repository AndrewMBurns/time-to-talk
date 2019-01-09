/*This is the JS for the navbar background colour change*/

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
    
/*This is the JS for an image appearing on scroll and sliding up*/

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("myImg").className = "slideUp";
  }
}

$(document).ready(function(){

$('a.homeiconswipe').mouseover(function(){

div = $('div.homeswipe');

div.stop().animate({visibility: visible}, 150);

}).mouseout(function(){

div.stop().animate({visibility: hidden}, 150);

});

});
