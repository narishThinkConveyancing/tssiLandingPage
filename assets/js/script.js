// Add smooth scrolling to all links
$("#navbarTSSIContent li a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            // window.location.hash = hash;
            $(".navbar .navbar-collapse").removeClass("show");
            if(hash != "#Home"){
              $("div").removeClass("maxMargin");
              $(hash).addClass("maxMargin");
            }
        });
    } // End if
});
//when user scroll
window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    setTimeout(function(){   $("div").removeClass("maxMargin"); console.log("test"); }, 300);
});
//when user scroll
// Custom Carousel
var carouselElem = $(".tss-gallery-holder");
if ( carouselElem.is(":visible") ) {
    carouselElem.find('#tssiGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 9,
        slideMargin: 0,
        enableDrag: false,
        auto: true,
    });
}
// Custom Carousel
