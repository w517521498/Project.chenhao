;
(function () {

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
                    <P>￥${value.price}</p>
                    </li>
                    `;
                }
                strhtml += '</ul>';
                this.xuan.innerHTML = strhtml;
            });
        }
    }

    new render().init();
})();