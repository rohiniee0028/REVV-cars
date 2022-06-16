let cardata = JSON.parse(localStorage.getItem("carDetails"));
console.log(cardata);

// let totalPaisa = JSON.parse(localStorage.getItem("paisa"));
// document.getElementById("givePrice").innerText=totalPaisa;

cardata.map(function (elem) {

    let name = document.createElement("h1");
    name.setAttribute("class", "namediv");
    name.innerText = elem.name;

    document.getElementById("myCars-name").append(name);

    let fuel_type = document.createElement("p")
    fuel_type.textContent = `${elem.fuel_type}`;
    fuel_type.setAttribute("class", "fuel_typediv");

    document.getElementById("put-fuel").append(fuel_type);

    let manual = document.createElement("p")
    manual.innerText = elem.work;
    manual.setAttribute("class", "manualdiv");

    document.getElementById("put-work").append(manual);

    let city = document.createElement("p")
    city.innerText = elem.city;
    city.setAttribute("class", "citydiv");

    document.getElementById("put-name").append(city);

    document.querySelector("#givePrice").innerText = `₹` + elem.price_per_month;

    document.getElementById("print-money").innerText = `₹` + elem.price_per_month;

});

document.getElementById("Proceedpay").addEventListener("click",function(){
    window.location.href="Payment.html";
})