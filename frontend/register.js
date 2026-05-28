function registerUser(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    if(username === "" || password === ""){

        alert("Please Fill All Fields");

        return;

    }

    alert("Registration Successful");

    window.location.href = "login.html";

}