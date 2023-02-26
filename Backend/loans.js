const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt")
const cors = require("cors");

const app = express();

app.use =(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    username: "username",
    password: "password",
    database: "LogIn",
});

app.post('/req_loan', (req, res)=> {

    //variable set from frontend
    const lendee = req.body.lendee;
    const status = "not loaned";
    const interest_rate = req.body.lendee;
    const amount = req.body.amount;
    const earnings = req.body.earnings;
    const date = req.body.date;


    db.query(
        "INSERT INTO users (lendee, status, interest_rate, amount, earnings, date) VALUES (?,?,?,?,?,?)",
        [lendee, status, interest_rate, amount, earnings, date],
        (err, result) => {
            console.log(err);
    });
});

app.post('/acc_loan', (req, res)=> {

    //variable set from frontend
    const lender = req.body.lender;
    const status = "loaned";

    db.query(
        "INSERT INTO users (lender, status) VALUES (?,?)",
        [lender, status],
        (err, result) => {
            console.log(err);
    });
});

app.post('/pay_loan', (req, res)=> {

    //variable set from frontend
    const lender = req.body.lender;
    const status = "payed";

    db.query(
        "INSERT INTO users (lender, status) VALUES (?,?)",
        [lender, status],
        (err, result) => {
            console.log(err);
    });
});