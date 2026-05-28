const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

// REGISTER API
app.post("/register", (req, res) => {

    const { username, password, role } = req.body;

    users.push({
        username,
        password,
        role
    });

    res.json({
        success: true,
        message: "Registration Successful"
    });

});

// LOGIN API
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if(user){

        res.json({
            success: true,
            message: "Login Successful"
        });

    } else {

        res.json({
            success: false,
            message: "Invalid Username or Password"
        });

    }

});

app.listen(3000, () => {
    console.log("Server running on 3000");
});