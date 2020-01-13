$('.daohang nav li a').hover(function(){
    $(this).find("span").css("display","block");
    //$('.daohang a span').css("display","block");
     $('.daohang .fushi .list').css("display","block");
},function(){
    $(this).find("span").css("display","none");
    $('.daohang .fushi .list').css("display","none");
});

$('#dingbu .dingllan .kf').hover(function(){
    $(this).find("ul").css("display","block");
},function(){
    $(this).find("ul").css("display","none");
});