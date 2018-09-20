$(document).ready(function(){
    var imglength2 = $(".gallery2 img").length;
    var imgWd2 = parseInt($(".imgSlide2").width());
    var fullWd2 = parseInt($(window).width());
    var intv3 = setInterval(function(){ return false; }, 2400);
    $(".imgSlide2 .gallery2 img").each(function(index){
        var idx = index+1;
        var leftoffset2 = idx*imgWd2-imgWd2;
        $(this).attr("data-index",idx);
        $(".paging2").append("<a href='javascript:;' data-index="+idx+">"+idx+"</a>");
        if(idx == 1){
            $(this).addClass("on2");
            $(this).css("left","0").css("z-index","3");
            $(".paging2 a[data-index='1']").addClass("paging_on2");
        }
    });
    $(".paging2").append("<button class='playBtn2' control-toggle='stop'></button>");
    
    $(".playBtn2").click(function(){
       var btnStatus2 = $(this).attr("control-toggle");
       if(btnStatus2=="play"){
           $(this).attr("control-toggle","stop");
           clearInterval(intv3);
           $(".gallery2").clearQueue();
       } else {
           $(this).attr("control-toggle","play");
           intv3 = setInterval(function(){ movenext2(); }, 2400);   
       }   
    });
    $(".prev2").click(function() { 
        $(".playBtn2").attr("control-toggle","play");
        clearInterval(intv3);
        moveprev2(); 
        intv3 = setInterval(function(){ movenext2(); }, 2400);
    });
    $(".next2").click(function() { 
        $(".playBtn2").attr("control-toggle","play");
        clearInterval(intv3);
        movenext2();
        intv3 = setInterval(function(){ movenext2(); }, 2400);
    });
     
    $(".paging2 a").click(function(){
        $(".playBtn2").attr("control-toggle","play");
        clearInterval(intv3);
        var i2 = $(this).attr("data-index");
        var k2 = $(".on2").attr("data-index");
        //alert(i+" : "+k);
        //console.log(i);
        $(this).addClass("paging_on2");
        $(this).siblings("a").removeClass("paging_on2");
        if(i2>k2){
            $(".on2").css("z-index","2").removeClass("on2").siblings("img[data-index='"+i+"']").css("left",imgWd2+"px").addClass("on2");
            $(".gallery").animate({"left" : "-="+imgWd2+"px"},500,function(){
                $(".gallery2").css("left","0");
                $(".gallery2 img").css("left","0");
                $(".on2").css("z-index","3");
                $(".gallery2 img").not(".on2").css("z-index","1");
            });
        } else {
            $(".on2").css("z-index","2").removeClass("on2").siblings("img[data-index='"+i2+"']").css("left","-"+imgWd2+"px").addClass("on2");
            $(".gallery2").animate({"left" : "+="+imgWd2+"px"},500,function(){
                $(".gallery2").css("left","0");
                $(".gallery2 img").css("left","0");
                $(".on2").css("z-index","3");
                $(".gallery2 img").not(".on2").css("z-index","1");
                });
        }
        intv3 = setInterval(function(){ movenext2(); }, 2400);
    });
    function movenext2(){
        if(!$('.gallery2').is(":animated")){
            if($('.on2').attr("data-index") == imglength2){
            var nextindex2 = 1; 
            }else{
            var nextindex2 = parseInt($(".on2").attr("data-index"))+1;
            }
            //alert(nextindex2)
            $(".on2").css("z-index","2").removeClass("on2").siblings("img[data-index='"+nextindex2+"']").css("left",imgWd2+"px").addClass("on2");
            $(".paging2 a").removeClass("paging_on2");
            $(".paging2 a[data-index='"+nextindex2+"']").addClass("paging_on2");
            $(".gallery2").animate({"left" : "-="+imgWd2+"px"},500,function(){
                $(".gallery2").css("left","0");
                $(".gallery2 img").css("left","0");
                $(".on2").css("z-index","3");
                $(".gallery2 img").not(".on2").css("z-index","1");
            });
        }
    }
    function moveprev2(){
        if(!$(".gallery2").is(":animated")){
            if($(".on2").attr("data-index") == 1){
            var previndex2 = imglength2; 
            }else{
            var previndex2 = parseInt($(".on2").attr("data-index"))-1;
            }
            $(".on2").css("z-index","2").removeClass("on2").siblings("img[data-index='"+previndex2+"']").css("left","-"+imgWd2+"px").addClass("on2");
            $(".paging2 a").removeClass("paging_on2");
            $(".paging2 a[data-index='"+previndex2+"']").addClass("paging_on2");
            $(".gallery2").animate({"left" : "+="+imgWd2+"px"},500,function(){
                $(".gallery2").css("left","0");
                $(".gallery2 img").css("left","0");
                $(".on2").css("z-index","3");
                $(".gallery2 img").not(".on2").css("z-index","1");
            });
        }
    }
});