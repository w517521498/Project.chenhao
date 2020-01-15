
    !function (){
        class render {
            constructor() {
                this.xuan = $('.xuan');
            }
            init() {
                $.ajax({
                    url: 'http://10.31.152.47/erjieduan/Project.chenhao/YoHoProject/php/danpin.php',
                    dataType: 'json'
                }).done((data) => {
                    console.log(data);
                    let $strhtml = '<ul>';
                    $.each(data,function (index,value) {
                        $strhtml += `
                        <li>
                        <a href="details.html?sid=${value.sid}">
                        <img src="${value.url}">
                        <h4>${value.title}</h4>
                        <P>¥${value.price}</p>
                        </a>
                        </li>
                        `;
                    });
                    $strhtml += '</ul>';
                    this.xuan.html($strhtml);
                });
            }
        }
    
        new render().init();
    }()
  
 
  
    

