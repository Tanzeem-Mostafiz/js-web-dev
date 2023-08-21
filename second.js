var totalprice = 0;

function totalPrice(pr){
    const price = parseFloat(document.getElementById(pr).innerText);
    console.log(typeof(pr));
    totalprice+=price;
 
    document.getElementById('dbtn').removeAttribute('disabled');
    if(totalprice>200){
        document.getElementById('couponb').removeAttribute('disabled');
    }
    return totalprice;

}