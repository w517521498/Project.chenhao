const search = document.querySelector('.hidden');
const list = document.querySelector('.sousuoxiala');
function yohobuy(data) {
    console.log(data);
    let str = '';
    for (let value of data['s']) {
        str += `<li>
        <a href="">${value}</a>
        </li>`;
    }
    list.innerHTML = str;
}
search.oninput = function () {
    let cScript = document.createElement('script');
     

    // cScript.src = 'https://www.yohobuy.com/product/search/suggest?callback=jQuery112408667644448079117_1578994217600&return_type='+ search.value + '=aq&_=1578994217617';
    // document.body.appendChild(cScript);
}