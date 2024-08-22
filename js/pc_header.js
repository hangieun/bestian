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
      if (Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // 메뉴 페이드 인/아웃
      if (st > lastScrollTop && st > navbarHeight){
          // 스크롤 내릴 때
          $('.pcHeader').fadeOut();
      } else {
          // 스크롤 올릴 때
          if (st + $(window).height() < $(document).height()) {
              $('.pcHeader').fadeIn();
          }
      }
      
      lastScrollTop = st;
  });



})