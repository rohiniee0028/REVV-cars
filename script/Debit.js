let cardata = JSON.parse(localStorage.getItem("carDetails"));

cardata.map(function(elem){
    document.getElementById("amount-paid").append(`₹ `+elem.price_per_month);
});
document.getElementById("finalPay").addEventListener("click",function(event){
    event.preventDefault(event);
    document.getElementById("finalPay").addEventListener("click",function(event){
        event.preventDefault(event);
            var name=document.querySelector("#mycard-name").value
            var card_no = document.querySelector("#mycard-number").value
            var cvv = document.querySelector("#CVV").value
           
           if(card_no.length==16 && cvv.length==3){
    
             alert("Thanks for revv you will get your car at your door step");
             window.location.href="Successful.html"
           }
           else{
             alert("please fill with correct details")
           }
       
    })
})

document.getElementById("clickHere").addEventListener("click",function(){
    window.location.href="Payment.html"
})