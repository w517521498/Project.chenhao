//  (function(){
//         class Lunbo1{
//     constructor(){
//         this.banner1=document.querySelector('.banner1');
//         this.dlun=document.querySelector('.lun1 li');
//         this.xlun=document.querySelector('.lun2 li');
//         this.left2=document.querySelector('#left2');
//         this.right2=document.querySelector('#right2');
//         this.index=0;
//         this.timer=null;
//     }
//     init(){
//         for(let i=0;i<this.xlun.length;i++){
//             this.xlun[i].onmouseover =()=>{
//                 this.index=i;
//                 this.tabswitch();
//             }
//         };
        
//         this.left2.onclick =()=>{
//             this.leftclick();
//         };
//         this.right2.onclick =()=>{
//             this.rightclick();
//         }
//         // console.log(this.leftclick());
        
//         this.autoplay();
//         this.banner1.onmouseover =()=>{
//             clearInterval(this.timer);
//         }
//         this.banner1.onmouseout =()=>{
//             this.autoplay();
//         }
//     }
//     tabswitch(){
//         for(let j=0;j<this.xlun.length;j++){
//             this.xlun[j].className='';
//             this.dlun[j].style.opacity=0;
//         }
//         this.xlun[this.index].className='active';
//         this.dlun[this.index].style.opacity=1;
//     }
//     leftclick(){
//         this.index--;
//         if(this.index<0){
//             this.index=this.xlun.length -1;
//         }
//         this.tabswitch();
//     }
//     rightclick(){
//         this.index++;
//         if(this.index >this.xlun.length -1){
//             this.index=0;
//         }
//         this.tabswitch();
//     }
//     autoplay(){
//         this.timer=setInterval(()=>{
//             this.right2.onclick();
//         },3000);
//     }
// }
// new Lunbo1().init();
// })()
