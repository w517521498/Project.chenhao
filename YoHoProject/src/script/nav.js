$('.daohang nav li a').hover(function(){
    $(this).find("span").css("display","block");
    //$('.daohang a span').css("display","block");
    $('.daohang .fushi .list').css("display","block");
},function(){
    $('.daohang a span').css("display","none");
    $('.daohang .fushi .list').css("display","none");
});
$('.daohang nav li liang').hover(function(){
    $('.daohang .fushi .list').css("display","block");
},function(){
    $('.daohang .fushi .list').css("display","none");
})
