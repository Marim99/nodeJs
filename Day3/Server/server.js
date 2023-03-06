const fs = require("fs");
const express = require("express");
let welcomePage = fs.readFileSync("../client/welcome.html").toString();
const { User } = require("./modules/User");

const path = require("path");
const app = express();
let user;
let PORT = process.env.PORT || "7002";
let obj = {
  users: [],
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});
app.get("/allData.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/allData.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/style.css"));
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/favicon.ico"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/script.js"));
});
app.get("/fetchData.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/fetchData.js"));
});
app.get("/Server/data.json", (req, res) => {
  res.sendFile(path.join(__dirname + "/data.json"));
});
app.post("/welcome.html", (req, res) => {
  username = req.body["username"];
  number = req.body["number"];
  address = req.body["address"];
  email = req.body["email"];
  user = new User(username, number, address, email);
  welcomePage = welcomePage.replace("{username}", user.name);
  welcomePage = welcomePage.replace("{number}", user.number);
  welcomePage = welcomePage.replace("{email}", user.email);
  welcomePage = welcomePage.replace("{address}", user.address);
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      obj.users.push(user);
      json = JSON.stringify(obj);
      fs.writeFile("data.json", json, "utf8", () => {});
    }
  });
  res.send(welcomePage);
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
