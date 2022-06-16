let carDetails = JSON.parse(localStorage.getItem("myCarItems"));

carDetails.map(function (elem) {

    let image = document.createElement("img");
    image.src = elem.image_url;
    image.setAttribute("class", "image_url");

    document.getElementById("MycarImage").append(image);

    let name = document.createElement("h1");
    name.setAttribute("class", "namediv");
    name.innerText = elem.name;

    document.getElementById("showCarName").append(name);

    let seats = document.createElement("p")
    seats.innerText = elem.seats;

    document.getElementById("showSeats").append(seats);

    let fuel_type = document.createElement("p")
    fuel_type.textContent = `${elem.fuel_type}`;
    fuel_type.setAttribute("class", "fuel_typediv");

    document.getElementById("showFuel").append(fuel_type);

    let manual = document.createElement("p")
    manual.innerText = elem.work;
    manual.setAttribute("class", "manualdiv");

    document.getElementById("showWork").append(manual);

    let brand = document.createElement("p")
    brand.innerText = elem.brand;
    brand.setAttribute("class", "branddiv");

    document.getElementById("showBrand").append(brand);

    let city = document.createElement("p")
    city.innerText = elem.city;
    city.setAttribute("class", "citydiv");

    document.getElementById("showCity").append(city);

    let cartype = document.createElement("p")
    cartype.innerText = elem.cartype;
    cartype.setAttribute("class", "cartypediv");

    document.getElementById("showCartype").append(cartype);

    let price = document.createElement("h2")
    price.setAttribute("class", "pricediv");
    price.innerText = `₹` + elem.price_per_month;

    let stk = document.createElement("p")
    stk.setAttribute("class","stkdiv");
    stk.innerText =`₹`+ elem.strikedoffprice;

    let box1=document.createElement("div");
    box1.append(price,stk);
    box1.setAttribute("class","box1div");

    document.getElementById("showPrice").append(box1);

    let proceedBtn = document.createElement("button")
    proceedBtn.setAttribute("class", "proceedBtn");
    proceedBtn.innerText = "Buy Now";
    proceedBtn.addEventListener("click", function () {
        proceedNow(elem);
    })

    document.getElementById("showButton").append(proceedBtn);

})

function proceedNow(elem){
    let carArr = [];
    carArr.push(elem)
    localStorage.setItem("carDetails",JSON.stringify(carArr));
    window.location.href="address.html";

}

let total = carDetails.reduce(function(acc,el){
    return acc+Number(el.price_per_month)
},0);

let totalstk = carDetails.reduce(function(acc,el){
    return acc+Number(el.strikedoffprice);
},0);

function selectduration(){
    var selected =document.querySelector("#duration").value;
if(selected==1){
price= total*1
pricestk= totalstk*1
}
else if(selected==2){
price= total*1.9;
pricestk= totalstk*1.9;
discount=5;
}
else if(selected==3){
price= total*2.6;
pricestk= totalstk*2.6;
discount=10;
}
else if(selected==6){
price= total*5;
pricestk= totalstk*5;
discount=15;
}
else if(selected==12){
price=total*9;
pricestk= totalstk*9;
discount=30;
}
document.querySelector(".pricediv").innerText = `₹ ${price}`;
document.querySelector(".stkdiv").innerText = `₹ ${pricestk}`
document.getElementById("discountDiv").innerText= `*****Your total amount is "₹${price}" after ${discount} % discount.*****`;
}




