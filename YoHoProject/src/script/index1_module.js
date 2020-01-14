class Lunbo{
    constructor(){
        this.datu=document.querySelector('.datu');
        this.spic=document.querySelectorAll('.spic li');
        this.bpic=document.querySelectorAll('.bpic li');
        this.arrowright=document.querySelector('#right');
        this.arrowleft=document.querySelector('#left');
        this.index=0;
        this.timer=null;
    }

    init(){
        for(let i=0;i<this.spic.length;i++){
            this.spic[i].onmouseover =()=>{
                this.index=i;
                this.tabswitch();
            }
        };
        
        this.arrowleft.onclick =()=>{
            this.leftclick();
        };
        this.arrowright.onclick =()=>{
            this.rightclick();
        }
        // console.log(this.leftclick());
        
        this.autoplay();
        this.datu.onmouseover =()=>{
            clearInterval(this.timer);
        }
        this.datu.onmouseout =()=>{
            this.autoplay();
        }
    }
    tabswitch(){
        for(let j=0;j<this.spic.length;j++){
            this.spic[j].className='';
            this.bpic[j].style.opacity=0;
        }
        this.spic[this.index].className='active';
        this.bpic[this.index].style.opacity=1;
    }
    leftclick(){
        this.index--;
        if(this.index<0){
            this.index=this.spic.length -1;
        }
        this.tabswitch();
    }
    rightclick(){
        this.index++;
        if(this.index >this.spic.length -1){
            this.index=0;
        }
        this.tabswitch();
    }
    autoplay(){
        this.timer=setInterval(()=>{
            this.arrowright.onclick();
        },3000);
    }
}

function $(selector, all) {
    if (all === true) {
        return document.querySelectorAll(selector);
    } else {
        return document.querySelector(selector);
    }
} 
function $ajax(option) {
    let promise = new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();
        option.type = option.type || 'get';
        if (!option.url) {
            throw new Error('请输入接口地址');
        }
        if (option.data && Object.prototype.toString.call(option.data).slice(8, -1) === 'Object') {
            option.data = objtostring(option.data);
        }
        if (option.data && option.type == 'get') {
            option.url += '?' + option.data;
        }
        if (option.async === 'false' || option.async === false) {
            option.async = false;
        } else {
            option.async = true;
        }
        ajax.open(option.type, option.url, option.async);
        if (option.data && option.type == 'post') {
            ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            ajax.send(option.data);
        } else {
            ajax.send();
        }
        if (option.async) {
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4) {
                    if (ajax.status === 200) {
                        let data = ajax.responseText;
                        if (option.dataType === 'json') {
                            data = JSON.parse(data);
                        }
                        resolve(data);
                    } else {
                        reject('接口地址不存在');
                    }
                }
            }
        } else {
            if (ajax.status === 200) {
                let data = ajax.responseText;
                if (option.dataType === 'json') {
                    data = JSON.parse(data);
                }
                resolve(data);
            } else {
                reject('接口地址不存在');
            }
        }
    });
    return promise; //一定要返回promise对象。
}
class render {
    constructor() {
        this.xuan = $('.xuan');
    }
    init() {
        $ajax({
            url: 'http://10.31.152.47/erjieduan/Project.chenhao/YoHoProject/php/danpin.php',
            dataType: 'json'
        }).then((data) => {
            console.log(data);
            let strhtml = '<ul>';
            for (let value of data) {
                strhtml += `
                <li>
                <a href="details.html?sid=${value.sid}">
                </a>
                <img src="${value.url}">
                <h4>${value.title}</h4>
                <P>¥${value.price}</p>
                </li>
                `;
            }
            strhtml += '</ul>';
            this.xuan.innerHTML = strhtml;
        });
    }
}


function float(){

}















define([],function(){ 
    return{
        init:function(){
            new Lunbo().init();
            new render().init();
        }
    }
});
