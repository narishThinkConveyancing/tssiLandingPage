var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

/* $("body").on("click", "#navbarNav li a", function(){
  var target = this.hash; // gets the #hash
  $target = $(target); //
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top-80 // scrolls to the link
  }, 500, 'swing', function () {
  });
}); */
orientation();
function orientation(){
  var isOrient = $( "#navbarNav" ).is( ":visible" );
  if(isOrient){
    $(window).scroll(onScroll);
  }
}
function onScroll(event){
  if (window.pageYOffset >= sticky) {
  navbar.classList.add("stickyNav");
  } else {
  navbar.classList.remove("stickyNav");
  }
  var scrollPosition = $(document).scrollTop();
  $('#navbarNav ul li a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('#newTeamSideBar ul liv a.active').removeClass('active');
        $(this).addClass('active');
    }
    else{
        currentLink.removeClass("active");
      }
  });
}
