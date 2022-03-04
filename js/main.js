$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.header').addClass("sticky")
    } else {
      $('.header').removeClass("sticky")
    }
    if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0})
  });

  $('.menu-toggle').click(function() {
    $('.header .header-nav').toggleClass('active');
    $('.menu-toggle i').toggleClass("active");
  });
});

var typed = new Typed(".typing", {
  strings: ["You Tuber", "Developer", "Blogger", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing-2", {
  strings: ["You Tuber", "Developer", "Blogger", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
