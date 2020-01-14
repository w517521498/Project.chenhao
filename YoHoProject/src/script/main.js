// require.config({
//     baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/', //设置模块的公共路径
//     paths: {
//         'jquery': 'jquery/1.12.4/jquery.min',
//         'jquerycookie': 'jquery-cookie/1.4.1/jquery.cookie.min',
//         'jquerylazyload': 'jquery.lazyload/1.9.1/jquery.lazyload.min',
//     }
// });
// require(['jquery', 'jquerycookie','index1_module'], function () {
    
//     let targetpage = $('#currentpage').attr('target-page'); 
//     if (targetpage) {
//         require([targetpage], function (targetpage) {
//             targetpage.init();
//         });
//     }
// })
require(['jquery','index1_module'],function(indexmodule){
    indexmodule.init();
});