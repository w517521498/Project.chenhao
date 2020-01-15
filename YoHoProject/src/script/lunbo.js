(function(){
    function $(selector, all) {
        if (all === true) {
            return document.querySelectorAll(selector);
        } else {
            return document.querySelector(selector);
        }
    } 
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
    new Lunbo().init();
})()
