(function($) {
  $(document).ready(function() {
    // Mobile menu toggle
    $('.menu-icon').click(function() {
      if ($('.navigation').hasClass('responsive')) {
        $('.navigation').removeClass('responsive');
      } else {
        $('.navigation').addClass('responsive');
      }
    });
  });
})(jQuery);
