//헤더 푸터 스크롤링
$(document).ready(function(){
    var ftHt = $(window).height() * 3;
    var parHt = $(window).height();
    //$(".ft").css("display", "none");
    $("#toTop").css("display", "none");
    //메뉴의 스크롤 모션
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct>=500){
            $(".hd").addClass("active");
            $("#toTop").css("display", "block");
        } else {
             $(".hd").removeClass("active");
             $("#toTop").css("display", "none");
        }

        if(sct>ftHt){
            $(".ft").addClass("active");
        } else {
            $(".ft").removeClass("active");
        }
    });
});