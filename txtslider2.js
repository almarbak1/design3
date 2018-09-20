$(document).ready(function(){
    var n = 1;
    var cnt = 3;
    $(".banTitleBox").eq(0).addClass("on");
    var intv2 = setInterval(function(){ titMov1(); }, 3000);
    
    $(".paging a, .next, .prev").click(function(){
        clearInterval(intv2);
        titMov1();
        intv2 = setInterval(function(){ titMov1(); }, 3000);
    });
    
    function titMov1(){
        var cur = parseInt($(".gallery img.on").attr("data-index"));
        $(".banTitleBox").removeClass("on");
        $(".banTitleBox").eq(cur-1).addClass("on");
    };
});