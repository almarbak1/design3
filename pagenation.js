//페이지네이션
$(document).ready(function(){
    $(".pageNation .pageBtn").eq(0).addClass("act");
    var sc_pg = parseInt($(window).height());
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        var btnPos = parseInt(sct / sc_pg);
        $(".pageNation .pageBtn").removeClass("act");
        $(".pageNation .pageBtn").eq(btnPos).addClass("act");
    });
    $(".pageNation .pageBtn").click(function(){
        var cPage = $(this).attr("data-val");
        $('html, body').not(":animated").animate({
            scrollTop: cPage*sc_pg + 'px'
        }, 1600);
    });
});