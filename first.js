let count=0;


function resetAll(){
    document.getElementById('totalp').innerText= "00";
    document.getElementById('discount').innerText= "00";
    document.getElementById('total').innerText= "00";
    totalprice=0;
    count=0;
    discount=0;
    total=0;
}

function display(number,price){
    count++;
    const tag = document.getElementById(number).innerText;
    const list = document.getElementById('list');
    const p = document.createElement('p');
    p.innerText= (count) + ". "+tag;
    list.appendChild(p);

    
    const tprice = totalPrice(price);
    document.getElementById('totalp').innerText= tprice;
    document.getElementById('total').innerText= tprice.toFixed(2);

}

function Coupon(){
    const code = document.getElementById('couponin').value;
    if(code==='SELL200'){
        const discount= totalprice*.2;
        document.getElementById('discount').innerText= discount.toFixed(2);
        const total = totalprice-discount;
        document.getElementById('total').innerText= total.toFixed(2);

    }
    document.getElementById('couponin').value= '';
}