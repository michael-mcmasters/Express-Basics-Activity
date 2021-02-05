const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let balance = 100000;

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.get("/balance", (req, res) => {
  res.send(balance.toString());
})

app.post("/withdraw", (req, res) => {
  const amountToWithdraw = req.body.amountToWithdraw;
  balance -= parseFloat(amountToWithdraw);
  res.send(balance.toString());
})

app.post("/deposit", (req, res) => {
  const amountToAdd = req.body.amountToAdd;
  balance += parseFloat(amountToAdd);
  res.send(balance.toString());
})

app.listen(3000, () => {
  console.log("We are up and running!");
})




// function balance() {

//   function getBalance() {
//     console.log("getting balance");
//   }

//   function withdraw() {
//     console.log("withdraw");
//   }

//   function deposit() {
//     console.log("deposit");
//   }
// }