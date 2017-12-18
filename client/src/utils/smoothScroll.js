//
// Smooth-scroll polyfill
//
const scrollSpeed = 500;
const scrollOffset = -64;
$('a[href*="#"]:not([href="#"])').click(function() {
  event.preventDefault();
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top + scrollOffset,
      }, scrollSpeed);
      return false;
    }
  }
});
