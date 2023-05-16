//画像切り替え//
$(function() {
  var $elem = $('.image-switch');
  var sp = '_sp.';
  var pc = '_pc.';
  var replaceWidth = 768;

  function imageSwitch() {
    var windowWidth = parseInt(window.innerWidth);
    $elem.each(function() {
      var $this = $(this);
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();
});

//fade-in//
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.fadeIn').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight) {
        $(this).addClass("fadeInOn");
      }
    });
  });
});