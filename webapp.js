//Require express
const express = require ("express");

//app object
const app = express();

//main page
app.get("/", function(req,res) {
	res.send("Welcome to my first Node.js web site. <br> <a href='/contact'>Contact Me</a> <br> <a href='/bio'>My Bio</a>");
});

//contact page
app.get("/contact", function(req,res) {
	res.send ("My name is Chandana and you can contact me at '12345678990' ");
});

//bio page
app.get("/bio", function(req,res) {
	res.send ("Here is my bio page. <br> I am pursuing my Masters in Information Technology! ");
});

app.listen(8002)
