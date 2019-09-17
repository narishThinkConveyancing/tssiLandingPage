// Add smooth scrolling to all links
$("#navbarTSSIContent li a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
            $(".navbar .navbar-collapse").removeClass("show");
        });
    } // End if
});
// Add smooth scrolling to all links

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
