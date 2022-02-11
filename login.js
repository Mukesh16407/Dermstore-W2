document.getElementById("login1").addEventListener("click", signIn);

var regdUsers = JSON.parse(localStorage.getItem("DreamUser"));
console.log("regdUsers:", regdUsers);

function signIn() {
    var email = document.querySelector("#email").value;
    var passWord = document.getElementById("password").value

    console.log(email, passWord)
  var flag = false;
    for (var i = 0; i < regdUsers.length; i++) {
        if (regdUsers[i].emaiAddress == email &&  regdUsers[i].passWord == passWord) {
            window.location.href = "home.html";
            flag = true;
            break;
        }
    }
    if(flag === true){
        alert("LogIn Sucessfully")
    }else{
        alert("Invalid")
    }

}

