(function () {
    class Details {
        constructor() {
            this.sid = location.search.substring(1).split('=')[1];
            this.spic = $('#spic');
            this.bpic = $('#bpic');
            this.sf = $('#sf');
            this.bf = $('#bf');
            this.list = $('#list');
            this.list_ul = $('#list ul');
            this.count = $('#count');
        }

        init() {
            $ajax({
                url: 'http://10.31.152.47/erjieduan/Project.chenhao/YoHoProject/php/getsid.php',
                data: {
                    sid: this.sid
                },
                dataType: 'json'
            }).then((objdata) => {
                $('#spic img').src = objdata.url;
                $('.loadtitle').innerHTML = objdata.title;
                $('.loadpcp').innerHTML = objdata.price;
                let piclist = objdata.urls.split(',');
                let strhtml = '';
                for (let value of piclist) {
                    strhtml += `<li><img src="${value}" /></li>`;
                }
                this.list_ul.innerHTML = strhtml;
            });

            this.addcart();
        }

        addcart() {
            let goodsnum = [];
            let goodsid = [];
            function getcookie() {
                if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
                    goodsnum = localStorage.getItem('cartnum').split(',');
                    goodsid = localStorage.getItem('cartsid').split(',');
                }
            }
            $('.p-btn a').onclick = () => {
                getcookie();
                if (goodsid.indexOf(this.sid) == -1) {
                    goodsid.push(this.sid);
                    localStorage.setItem('cartsid', goodsid);
                    goodsnum.push(this.count.value);
                    localStorage.setItem('cartnum', goodsnum);
                } else {
                    let index = goodsid.indexOf(this.sid);
                    let newnum = parseInt(goodsnum[index]) + parseInt(this.count.value);
                    goodsnum[index] = newnum;
                    localStorage.setItem('cartnum', goodsnum);
                }
            }
        }
    }

    new Details().init();
})();