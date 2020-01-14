class Rem {
    constructor() {
        this.rInput = document.querySelectorAll('input');
        this.btn = document.querySelector('#login-btn');
        this.spans=document.querySelectorAll('span');
        this.number=true;
        this.email=true;
    }
    let_this=this;
    init() {
        // this.rInput[0].onblur=function(){
        //     if(this.value!==''){
        //         var reg =/^1[3578]\d{9}$/;
        //         if(reg.test(this.value)){
        //             _this.spans[0].innerHTML='√';
        //             _this.spans[0].style.cssText='font-size:12px;color:green;';
        //             this.number=true;
        //         }else{
        //             _this.spans[0].innerHTML='用户不能超过7和汉字或者14个字符 ';
        //             _this.spans[0].style.cssText='font-size:12px;color:#ff0000;';
        //             this.number=true;
        //         }
        //     }else{
        //         _this.spans[0].innerHTML='用户名不能为空';
        //         _this.spans[0].style.cssText='font-size:12px;color:#ff0000;';
        //     }
        //     this.rInput[0].onblur = function () {
        //         if (this.value !== '') {
        //             var reg = /^(\w+[\+\-\]*\w+)\@(\w+[\+\-]*\w+)\.(\w+[\+\-]*\w+)$/;
        //             if (reg.test(this.value)) {
        //                 _this.spans[0].innerHTML = '√';
        //                 _this.spans[0].style.cssText = 'font-size:12px;color:green;';
        //                 this.email = true;
        //             } else {
        //                 _this.spans[0].innerHTML = '电子邮箱格式不正确';
        //                 _this.spans[0].style.cssText = 'font-size:12px;color:red;';
        //                 this.email = false;
        //             }
        //         } else {
        //             spans[2].innerHTML = '电子邮箱不能为空';
        //             spans[2].style.cssText = 'font-size:12px;color:red;';
        //             this.email = false;
        //         }
        //     }

        // }













        this.btn.onclick = ()=> {
            if (rInput[2].checked) {
                cookie.add('user', rInput[0].value, 7);
                cookie.add('user', rInput[1].value, 7);
            } else {
                cookie.del('user');
                cookie.del('pass');
            }
            alert('按钮被点击了');
        };
        if(cookie.get('user') && cookie.get('pass')){
            this.rInput[0].value=cookie.get('user');
            this.rInput[1].value=cookie.get('pass');
            this.rInput[2].checked=true;
        }
    }
}
new Rem().init();
