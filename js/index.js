$(document).ready(function(){

    //메인배너 슬라이드
    let count = 0
     setInterval(function(){
        count++
        if(count>3){count=0}
        $(".main_train").css("transform",`translateX(${count*-25}%)`)
        $(".main_btn").removeClass("on")
        $(".main_btn").eq(count).addClass("on")

    },3500)


    $(".main_train_ctrl>div").click(function(){
        let idx = $(this).index()
        $(".main_train").css("transform",`translateX(${idx*-25}%)`)
        $(".main_btn").removeClass("on")
        $(this).addClass("on")
    })

   

    // 2섹션 탭메뉴
    let tab_count = 0
    $(".tab_menu>li").click(function(){
        tab_count = $(this).index()
        if(tab_count>3){tab_count=0}
        $(".tab_menu>li").removeClass("on")
        $(this).addClass("on")
        $(".tab_train>li").removeClass("on")
        $(".tab_train>li").eq(tab_count).addClass("on")
        
    })


    // 3섹션 후원 배너 슬라이드
    let slide_count = 0
    $(".slide_viewer>li").click(function(){
        slide_count = $(this).index()
        swiper_sup.slideToLoop(slide_count,1000)
    })
    
    const swiper_sup = new Swiper('.support_bottom .sup_station',{
        loop:true,
        slidesPerView: 3,
        centeredSlides: true,
        pagination: {
            el: ".current_process_bar",
            type: "progressbar",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            780: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            980: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });

    swiper_sup.on('slideChange', function(){
        console.log(swiper_sup.realIndex);
    $(".slide_viewer>li").removeClass("on")
    $(".slide_viewer>li").eq(swiper_sup.realIndex).addClass("on")

    });

    // 4섹션 뉴스 배너 슬라이드

    let news_count = 0
    setInterval(function(){
        news_count++
        if(news_count>3){news_count=0}
        $(".news_train").css("transform",`translateY(${news_count*-25}%)`)
        $(".nctrl_btn").removeClass("on")
        $(".nctrl_btn").eq(news_count).addClass("on")
    },3000)

    $(".nctrl_btn").click(function(){
        let idx = $(this).index()
        $(".news_train").css("transform",`translateY(${idx*-25}%)`)
        $(".nctrl_btn").removeClass("on")
        $(this).addClass("on")
    })

    //5섹션 컨텐츠배너 슬라이드
    const contents_swiper = new Swiper('.banner_station', {
        loop: true,
        navigation: {
          nextEl: '.pcContents .swiper-button-next',
          prevEl: '.pcContents .swiper-button-prev',
        },
    })


    // 하단 띠 배너
    let line_station_swiper = new Swiper(".line_station",{
        speed:3000,
        slidesPerView:6,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
    })


     //모바일 메인배너 슬라이드
     var mobileMain_swiper = new Swiper(".mobileMain_station",{
        slidesPerView: 1.2,
        spaceBetween: 10,
      });

    // 모바일 뉴스배너 슬라이드
    var mobileNews_swiper = new Swiper(".moNews_station",{
        slidesPerView: 1.2,
        spaceBetween: 10,
      });

    
    //뉴스레터 신청 팝업
    $(".newsPopup_open").click(function(){
        $(".modal").addClass("on")
        $("body").addClass("on")
        $(".newsPopup").addClass("on")
    })
    $(".popupClose").click(function(){
        $(".modal").removeClass("on")
        $("body").removeClass("on")
        $(".newsPopup").removeClass("on")
    })



     


















})