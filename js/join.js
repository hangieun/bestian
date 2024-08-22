$(document).ready(function(){
    let btnState = false
    $(".viewBtn").click(function(event) {
        event.preventDefault();
        $(".termsView").slideToggle();
        // 보기, 닫기 버튼으로 토글

        if (btnState==false) {
            $(this).text("닫기");
            btnState=true
        } else {
            $(this).text("보기");
            btnState=false
        }
    });

    $(".jointype>li").click(function(){
        $(".jointype>li").removeClass("on")
        $(this).addClass("on")
        
    })

     // 개인 회원가입 버튼 클릭 시
     $(".type1").click(function(event) {
        event.preventDefault();
        $(".joinRadio").hide();
        $(".businessUser").hide();
        $(".groupUser").hide();
        $(".personalUser").show();
    });
    // 새로고침 시 개인 회원가입으로 고정
    $(".type1").trigger("click");

    // 단체 회원가입 버튼 클릭 시
    $(".type2").click(function(event) {
        event.preventDefault();
        $(".personalUser").hide();
        $(".groupUser").hide();
        $(".joinRadio").show();
        $(".businessUser").show();
        $("#business").prop("checked", true); // 사업자 라디오 버튼 선택
    });

    // 사업자 라디오 버튼 클릭 시
    $("#business").click(function() {
        $(".groupUser").hide();
        $(".businessUser").show();
    });

    // 비사업자 라디오 버튼 클릭 시
    $("#group").click(function() {
        $(".businessUser").hide();
        $(".groupUser").show();
    });



    
   
    





})