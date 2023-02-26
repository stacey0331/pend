const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "login",                      
});

app.post("/create", (req, res)=> {

    //variable set from frontend
    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    bcrypt.hash(password, 10, function(err, hash) {
        db.query(
            "INSERT INTO users (username, password, first_name, last_name) VALUES (?,?,?,?)",
            [username, hash, first_name, last_name],
            (err, result) => {
                console.log(err);
                //console.log(hash);
        });
    });
});

app.post('/login', (req, res)=> {

    //variable set from frontend
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT password FROM users where username = ?",
        [username],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }

            // if(result.length > 0) {
            //     res.send(result);
            //     console.log("Match");
            // } else {
            //     res.send({message: "Username and password don't match."});
            //     console.log("Username and password don't match.");
            //     console.log(hash);
            // }

            bcrypt.compare(password, result[0].password, function(err, hash_result) {
                if (hash_result == true) {
                    //login
                    res.send({message: "Can login"});
                    console.log("Can login");
                } else {
                    res.send({message: "Could not login."});
                    console.log("Could not login");
                    // console.log(result[0].password);
                    // console.log(hash_result);
                    // console.log(password);
                }
            });
    });
});

app.post('/bank', (req, res)=> {

    //variable set from frontend
    const bank = req.body.bank;

    bcrypt.hash(bank, 10, function(err, hash) {
        db.query(
            "INSERT INTO users (bank) VALUES (?)",
            [hash],
            (err, result) => {
                console.log(err);
        });
    });
});

app.listen(3001, () => {
    console.log("running backend");
});