! function ($) {
    let $user = $('input[name="username"]');
    let $userflag = true;
    $user.on('blur', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.152.47/erjieduan/Project.chenhao/YoHoProject/php/registry.php',
            data: {
                username: $user.val()
            }
        }).done(function (result) {
            if (!result) { //不存在
                $('span').html('√').css('color', 'green');
                $userflag = true;
            } else {
                $('span').html('改手机号已经被注册').css('color', 'red');
                $userflag = false;
            }
        });
    });



    $('form').on('submit', function () {
        if ($user.val() == '') {
            $('span').html('请输入手机号').css('color', 'red');
            $userflag = false;
        };
        if (!$userflag) {
            return false;
        }
    });


}(jQuery);