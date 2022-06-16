let cardata = JSON.parse(localStorage.getItem("carDetails"));

cardata.map(function(elem){
    document.getElementById("amount-paid").append(`₹ `+elem.price_per_month);
});

document.getElementById("credit-card").addEventListener("click",function(){
    window.location.href="Credit.html"
})
document.getElementById("debit-card").addEventListener("click",function(){
    window.location.href="Debit.html"
})