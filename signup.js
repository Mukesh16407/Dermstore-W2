document.querySelector("button").addEventListener("click", signUp);
    
var userArr = JSON.parse(localStorage.getItem("DreamUser")) || [];

function signUp() {
   var user = document.getElementById("user").value;  
   var email = document.getElementById("email").value; 
   var email1 = document.getElementById("email1").value; 
   var pass = document.getElementById("pass").value; 
   var pass1 = document.getElementById("pass1").value; 
   var phone = document.getElementById("phone").value; 
   var referral = document.getElementById("referral").value;

 
 var DreamStoreuser ={
     username:user,
     emaiAddress: email,
     emaiAddress1: email1,
     passWord:pass,
     passWord1:pass1,
     phoneNo:phone,
     referral:referral
    };
    console.log(DreamStoreuser)
    
    if(user == ""){
        
        document.getElementById("user").style.borderColor = "red";
        document.getElementById('user1').textContent = '**Full Name is a required field';
        document.getElementById('user1').style.backgroundColor="rgb(250,232,230)";
        return false
    }
      
    if(user.length <= 2){
      document.getElementById("user").style.borderColor = "red";
      document.getElementById('user1').textContent = '**Please Fill Valid User Name';
      document.getElementById('user1').style.backgroundColor="rgb(250,232,230)";
      return false
    }

    if(!isNaN(user)){
      document.getElementById("user").style.borderColor = "red";
      document.getElementById('user1').textContent = '**Only Characters are allowed';
      document.getElementById('user1').style.backgroundColor="rgb(250,232,230)";
      return false
    }
     if(email== "" ){
     
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email2").textContent =
        "Email address is a required field";
      document.getElementById("email2").style.backgroundColor =
       "rgb(250,232,230)";
       return false
    }  
    if(email.indexOf('@') <= 0 ){
     
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email2").textContent =
        "** @ invalid Postion";
      document.getElementById("email2").style.backgroundColor =
       "rgb(250,232,230)";
       return false
    }  
    if((email.charAt(email.length -4) != ".") && (email.charAt(email.length -3) != ".")){
     
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email2").textContent =
        "** @ invalid Postion";
      document.getElementById("email2").style.backgroundColor =
       "rgb(250,232,230)";
       return false
    }  

     if( email != email1 ){
    
      document.getElementById('email3').textContent = 'Please Fill Same Email';
       document.getElementById("email3").style.backgroundColor = "rgb(250,232,230)";
     }
     if(pass.length <= 5 || pass == "" ){
     
       document.getElementById("pass").style.borderColor = "red";
         return false
     }

    if(pass != pass1){
      
       document.getElementById('pass3').textContent = 'Please Fill Same Password';
       document.getElementById("pass3").style.backgroundColor = "rgb(250,232,230)";
       return false
    }
   else{
     alert("sucessfully register")
        userArr.push(DreamStoreuser);
        localStorage.setItem("DreamUser", JSON.stringify(userArr))
        window.location.href ="login.html"
   }
 // redirect the user to signin page
}



