$(document).ready(function(){

    //상단 메뉴
    $(".menu_bar_open").click(function(){
        $(".tabHeader_menu").addClass("on")
    })
    $(".menu_close").click(function(){
        $(".tabHeader_menu").removeClass("on")
    })

    //메인배너 슬라이드
    // let count = 0
    // setInterval(function(){
    //     count++
    //     if(count>3){count=0}
    //     $(".main_train").css("transform",`translateX(${count*-25}%)`)
    //     $(".main_btn").removeClass("on")
    //     $(".main_btn").eq(count).addClass("on")
    // },4000)

    $(".main_train_ctrl>div").click(function(){
        let idx = $(this).index()
        $(".main_train").css("transform",`translateX(${idx*-25}%)`)
        $(".main_btn").removeClass("on")
        $(this).addClass("on")
    })

    // 탭메뉴
    let tab_count = 0
    $(".tab_menu>li").click(function(){
        tab_count = $(this).index()
        if(tab_count>3){tab_count=0}
        $(".tab_menu>li").removeClass("on")
        $(this).addClass("on")
        $(".tab_train>li").removeClass("on")
        $(".tab_train>li").eq(tab_count).addClass("on")
        
        // $(".tab_train").css("transform",`translateX(${tab_count*-25}%)`)
        
        // if(tab_count==0){
        //     increase_num("#ni1")
        //     increase_num("#ni2")
        // }else if(tab_count==1){
        //     increase_num("#ni3")
        //     increase_num("#ni4")
        // }else if(tab_count==2){
        //     increase_num("#ni5")
        //     increase_num("#ni6")
        // }else{
        //     increase_num("#ni7")
        //     increase_num("#ni8")
        // }
    })


   // 3섹션 후원 배너 슬라이드
   let slide_count = 0
   $(".slide_viewer>li").click(function(){
       slide_count = $(this).index()
      //  alert(slide_count)
       swiper_sup.slideToLoop(slide_count,1000)
   })

   
  const swiper_sup = new Swiper('.sup_station',{
      loop:true,
      slidesPerView: 3,
      centeredSlides: true,
      pagination: {
          el: ".current_process_bar",
          type: "progressbar",
        },
        breakpoints: {
        // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            780: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            980: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
  });

  swiper_sup.on('slideChange', function () {
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



     


















})