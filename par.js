//한 페이지씩 스크롤
$(document).ready(function () {
    var sc_pg = parseInt($(window).height());
    $(window).on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0) {
            $('html, body').not(":animated").animate({
                scrollTop : '+='+sc_pg+'px'},800);
        } else {
            $('html, body').not(":animated").animate({
                scrollTop : '-='+sc_pg+'px'},800);
        }
        return false;
    });
    //$(window).mousewheel
});