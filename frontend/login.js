function loginUser(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    if(username === "shruti"
        &&
       password === "12345"){

        alert("Login Successful");

        window.location.href =
        "dashboard.html";

    }

    else{

        alert("Invalid Username or Password");

    }

}