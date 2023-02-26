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

    bcrypt.hash(password, 10, function(err, hash) {
        db.query(
            "INSERT INTO users (username, password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
                console.log(err);
                console.log(hash);
        });
    });
});

app.post('/login', (req, res)=> {

    //variable set from frontend
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users where username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }

            if(result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Username and password don't match."});
            }

            bcrypt.compare(myPlaintextPassword, hash, function(err, hash_result) {
                if (hash_result == true) {
                    //login
                } else {
                    res.send({message: "Password is incorrect."});
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