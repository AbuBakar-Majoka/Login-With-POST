const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let users = [
    {
        email : "abcd1@gmail.com",
        password : 1212,
    },
    
    {
        email : "abcd2@gmail.com",
        password : 1212,
    },

    {
        email : "abcd3@gmail.com",
        password : 1212,
    },

]

app.use(bodyParser.json());


app.post("/", (req, res) => {


        let email = req.body.email;
        let pass = req.body.password;
        let flag = false;
        
        users.forEach(user => {
            if(email == user.email && pass == user.password){
                flag = true;
            } 
        });
        if (flag) {
            res.status(200).send("Login successful");
        } else {
            res.status(400).send("Invalid email or password");
        }
    })

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})