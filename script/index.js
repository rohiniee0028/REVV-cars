//-----slider js------------
const productContainer = [...document.querySelectorAll('.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) =>{
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', ()=>{
     item.scrollLeft += containerWidth;
  })
  preBtn[i].addEventListener('click', ()=>{
    item.scrollLeft -= containerWidth;
 })
 
});

  // saving city to local storage--------------------

  function saveCity(){
    let val = document.getElementById("rohselectcity").value;
    localStorage.setItem("cityname", JSON.stringify(val));
  }

  // login or signup js-----------------------------------------------------

  document.querySelector("#ayazclickonsignin").addEventListener('click',function(event){
    event.preventDefault()
    document.querySelector("#ayazmaincontainer").style.display="flex"
})

document.querySelector("#ayazcloseicon").addEventListener('click',function(event){
    event.preventDefault()
    document.querySelector("#ayazmaincontainer").style.display="none"
})

document.querySelector("#ayazbuttonforsignup").addEventListener('click',function(event){
    event.preventDefault()
    document.querySelector("#ayazsignupmaincontainer").style.display="flex"
})

document.querySelector("#ayazsignupcloseicon").addEventListener('click',function(event){
    event.preventDefault()
    document.querySelector("#ayazsignupmaincontainer").style.display="none"
    document.querySelector("#ayazmaincontainer").style.display="none"

})

  //-------------signup---------------------------

document.querySelector(".ayazmysignup").addEventListener('submit',forsignup)
var userstack=JSON.parse(localStorage.getItem("userdatabase")) ||[]
function forsignup(event){
    event.preventDefault()

    var signemail=document.querySelector("#ayazsignupcreateemail").value
    var signpassword=document.querySelector("#ayazsignupcreatepassword").value

    var userdata={
        signinemail: signemail,
        signinpassword: signpassword
    }
    userstack.push(userdata)

    localStorage.setItem("userdatabase",JSON.stringify(userstack))
    alert("Sign up Successful")
    document.querySelector("#ayazsignupmaincontainer").style.display="none"
}

  // -----------------------login--------------------------------------

  document.querySelector(".ayazmylogin").addEventListener('submit',forlogin)

  var reguser=JSON.parse(localStorage.getItem("userdatabase"))
  
  
  
  function forlogin(event){
      event.preventDefault()
      document.querySelector("#ayazclickonsignin").textContent=JSON.parse(localStorage.getItem("nameofmyuser"))
  
  
      var loginemail=document.querySelector("#ayazloginenteremail").value
      var loginpassword=document.querySelector("#ayazloginenterpassword").value
  
      var final=false
      for(var i=0; i<reguser.length; i++)
      {
          
          if(reguser[i].signinemail==loginemail && reguser[i].signinpassword==loginpassword)
          {
              final=true;
              var nameofmyuser=reguser[i].signinemail
          }
      }
      if(final==true)
          {
              alert("login Successful")
              document.querySelector("#ayazsignupmaincontainer").style.display="none"
              document.querySelector("#ayazmaincontainer").style.display="none"
              document.querySelector("#ayazclickonsignin").textContent="Welcome"+" "+nameofmyuser;
              document.querySelector("#ayazclickonsignin").style.marginTop="20px"
              document.querySelector("#ayazclickonsignin").style.fontSize="15px"
              localStorage.setItem("nameofmyuser",JSON.stringify("welcome"+" "+nameofmyuser))
              window.location.href="index.html"
          }
          else{
              alert("Wrong Email or Password")
  
          }
          
  }


