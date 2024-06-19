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

    //tab사이즈 상단 메뉴
        $(".menu_bar_open").click(function(){
            $(".tabHeader_menu").addClass("on")
        })
        $(".menu_close").click(function(){
            $(".tabHeader_menu").removeClass("on")
        })

    

    //mobile 상단 메뉴
        $(".moHeader .mobile_open").click(function(){
            $(".moHeader_menu").addClass("on")
        })
        $(".moHeader_menu .menu_close").click(function(){
            $(".moHeader_menu").removeClass("on")
        })

})