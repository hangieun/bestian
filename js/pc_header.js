$(function(){

  //상단메뉴
  let scrTop = 0
  $(window).scroll(function(){
      let scrTop = $(window).scrollTop()
      if(scrTop>200){
          $(".pcHeader").addClass("on")
      }else{
          $(".pcHeader").removeClass("on")
      }

  })
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.pcHeader').outerHeight();
  
  $(window).scroll(function() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.pcHeader').fadeOut();
      } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
              $('.pcHeader').fadeIn();
          }
      }
      
      lastScrollTop = st;
  });



})