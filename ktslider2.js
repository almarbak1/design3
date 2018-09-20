$(document).ready(function(){
    var imglength = $(".gallery img").length;
    var imgWd = parseInt($(".imgSlide").width());
    var fullWd = parseInt($(window).width());
    var intv = setInterval(function(){ movenext(); }, 3000);
    $(".banTitleBox").each(function(index){
       var idx = index+1; 
       $(this).attr("data-value", idx);
    });
    $(".imgSlide .gallery img").each(function(index){
        var index = index+1;
        var leftoffset = index*imgWd-imgWd;
        $(this).attr("data-index",index);
        $(".paging").append("<a href='javascript:;' data-index="+index+">"+index+"</a>");
        if(index == 1){
            $(this).addClass("on");
            $(this).css("left","0").css("z-index","3");
            $(".paging a[data-index='1']").addClass("paging_on");
        }
    });
    $(".paging").append("<button class='playBtn' control-toggle='play'></button>");
    
    $(".playBtn").click(function(){
       var btnStatus = $(this).attr("control-toggle");
       if(btnStatus=="play"){
           $(this).attr("control-toggle","stop");
           clearInterval(intv);
           $(".gallery").clearQueue();
       } else {
           $(this).attr("control-toggle","play");
           intv = setInterval(function(){ movenext(); }, 3000);   
       }   
    });
    $(".prev").click(function() { 
        clearInterval(intv);
        moveprev(); 
        intv = setInterval(function(){ movenext(); }, 3000);
    });
    $(".next").click(function() { 
        clearInterval(intv);
        movenext();
        intv = setInterval(function(){ movenext(); }, 3000);
    });
     
    $(".paging a").click(function(){
        clearInterval(intv);
        var i = $(this).attr("data-index");
        var k = $(".on").attr("data-index");
        //alert(i+" : "+k);
        //console.log(i);
        $(this).addClass("paging_on");
        $(this).siblings("a").removeClass("paging_on");
        if(i>k){
            $(".on").css("z-index","2").removeClass("on").siblings("img[data-index='"+i+"']").css("left",imgWd+"px").addClass("on");
            $(".gallery").animate({"left" : "-="+imgWd+"px"},500,function(){
                $(".gallery").css("left","0");
                $(".gallery img").css("left","0");
                $(".on").css("z-index","3");
                $(".gallery img").not(".on").css("z-index","1");
            });
        } else {
            $(".on").css("z-index","2").removeClass("on").siblings("img[data-index='"+i+"']").css("left","-"+imgWd+"px").addClass("on");
            $(".gallery").animate({"left" : "+="+imgWd+"px"},500,function(){
                $(".gallery").css("left","0");
                $(".gallery img").css("left","0");
                $(".on").css("z-index","3");
                $(".gallery img").not(".on").css("z-index","1");
                });
        }
        intv = setInterval(function(){ movenext(); }, 3000);
    });
    function movenext(){
        if(!$('.gallery').is(":animated")){
            if($('.on').attr("data-index") == imglength){
            var nextindex = 1; 
            }else{
            var nextindex = parseInt($(".on").attr("data-index"))+1;
            }
            //alert(nextindex)
            $(".on").css("z-index","2").removeClass("on").siblings("img[data-index='"+nextindex+"']").css("left",imgWd+"px").addClass("on");
            $(".paging a").removeClass("paging_on");
            $(".paging a[data-index='"+nextindex+"']").addClass("paging_on");
            $(".gallery").animate({"left" : "-="+imgWd+"px"},500,function(){
                $(".gallery").css("left","0");
                $(".gallery img").css("left","0");
                $(".on").css("z-index","3");
                $(".gallery img").not(".on").css("z-index","1");
            });
        }
    }
    function moveprev(){
        if(!$(".gallery").is(":animated")){
            if($(".on").attr("data-index") == 1){
            var previndex = imglength; 
            }else{
            var previndex = parseInt($(".on").attr("data-index"))-1;
            }
            $(".on").css("z-index","2").removeClass("on").siblings("img[data-index='"+previndex+"']").css("left","-"+imgWd+"px").addClass("on");
            $(".paging a").removeClass("paging_on");
            $(".paging a[data-index='"+previndex+"']").addClass("paging_on");
            $(".gallery").animate({"left" : "+="+imgWd+"px"},500,function(){
                $(".gallery").css("left","0");
                $(".gallery img").css("left","0");
                $(".on").css("z-index","3");
                $(".gallery img").not(".on").css("z-index","1");
            });
        }
    }
});