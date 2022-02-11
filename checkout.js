
document.getElementById("formid").addEventListener("submit",formValidation);

document.getElementById("myText").defaultValue = "United State";

function formValidation(e) {
  e.preventDefault();
  
  var Email = document.getElementById("email");
  var Name = document.getElementById("Name");
  var Phone = document.getElementById("phone");
  
  console.log(Email)
 if(Email== "" ){
 
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("WrongEmail").textContent =
    "Email address is a required field";
  document.getElementById("WrongEmail").style.color =
   "rgb(250,232,230)";
   return false
}  
if(Email.indexOf('@') <= 0 ){
 
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("WrongEmail").textContent =
    "** @ invalid Postion";
  document.getElementById("WrongEmail").style.color =
   "rgb(250,232,230)";
   return false
}  
if((Email.charAt(Email.length -4) != ".") && (Email.charAt(Email.length -3) != ".")){
 
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("email2").textContent =
    "** @ invalid Postion";
  document.getElementById("email2").style.color =
   "rgb(250,232,230)";
   return false
} 
if(Name == ""){
        
    document.getElementById("Name").style.borderColor = "red";
    document.getElementById('WrongName').textContent = '**Full Name is a required field';
    document.getElementById('WrongName').style.color="rgb(250,232,230)";
    return false
}
  
if(Name.length <= 2){
  document.getElementById("Name").style.borderColor = "red";
  document.getElementById('WrongName').textContent = '**Please Fill Valid User Name';
  document.getElementById('WrongName').style.color="rgb(250,232,230)";
  return false
}

if(!isNaN(Name)){
  document.getElementById("Name").style.borderColor = "red";
  document.getElementById('WrongName').textContent = '**Only Characters are allowed';
  document.getElementById('WrongName').style.color="rgb(250,232,230)";
  return false
} 




  
  
   if(Phone == ""){
    document.getElementById("phone").style.borderColor = "red";
    document.getElementById('wrongPhone').textContent = '**phone Number is Required';
    document.getElementById('wrongPhone').style.color="rgb(250,232,230)";
    return false
   }
   
   if(isNaN(Phone)){
    Phone.value ="";
    return false
   }
   if(Phone.length < 10){
    document.getElementById("phone").style.borderColor = "red";
    document.getElementById('wrongPhone').textContent = '**Please Enter 10 Digts Number';
    document.getElementById('wrongPhone').style.color="rgb(250,232,230)";
    return false

  }
  if(Phone.length > 10){
    document.getElementById("phone").style.borderColor = "red";
    document.getElementById('wrongPhone').textContent = '**Please Enter 10 Digts Number';
    document.getElementById('wrongPhone').style.color="rgb(250,232,230)";
    return false;
  } else{
      
       alert("Thank you For Share Your Details");
       document.getElementById("detailsCheck").addEventListener("click", function () {
        window.location.href ="product.html"
      });
   }
  //console.log(arrObj);  
}


function validation(e) {
  e.preventDefault();

  var password = document.getElementById("cardNumber");
  var name = document.getElementById("name");
  var month = document.getElementById("select1");
  var year = document.getElementById("select2");
  var cvv = document.getElementById("pass");

  

  if(password.value.length !== 16){
    password.style.border ="2px solid red";
    return false
  }
  
  if(name.value.length == ""){
    name.style.border ="2px solid red";
    return false
   }
  if(cvv.value.length !==3){
    cvv.style.border ="2px solid red";
    return false
  }
  else{
    
    document.getElementById("form_1").addEventListener("submit", OtpPage);
    function OtpPage() {
      var name = document.getElementById("name");
      var password = document.getElementById("cardNumber");
      var cvv = document.getElementById("pass");

      if (
        name.value.length > 0 &&
        password.value.length === 16 &&
        cvv.value.length === 3
      ) {
        alert("Please Enter 4 Digts OTP Number");
        window.location.href = "OTP.html";
      }
    }
  }
}
 
