const http = require("http");
const fs = require("fs");
const { User } = require("./modules/User");

let indexHTML = fs.readFileSync("../clientSide/index.html").toString();
let styleCSS = fs.readFileSync("../clientSide/style.css").toString();
let myIcon = fs.readFileSync("../clientSide/favicon.ico");
let myJson = fs.readFileSync("./client.json");
let welcomePage = fs.readFileSync("../clientSide/welcome.html").toString();
let allData = fs.readFileSync("../clientSide/allData.html").toString();
let scriptFile = fs.readFileSync("../clientSide/fetchData.js").toString();
let user;
let totalData = "";
let username = "";
let number = "";
let address = "";
let email = "";
let obj = {
  clients: [],
};
http
  .createServer((req, res) => {
    //#region GET
    if (req.method == "GET") {
      switch (req.url) {
        case "/index.html":
          res.writeHead(200, "Ok", { "content-type": "text/html" });
          res.write(indexHTML);
          break;
        case "/welcome.html":
          res.writeHead(200, "Ok", { "content-type": "text/html" });
          res.write(welcomePage);
          break;
        case "/allData.html":
          res.writeHead(200, "Ok", { "content-type": "text/html" });
          res.write(allData);
          break;
        case "/style.css":
          console.log("k");
          res.writeHead(200, "Ok", { "content-type": "text/css" });
          res.write(styleCSS);
          break;
        case "/fetchData.js":
          res.writeHead(300, "hii", { "content-type": "text/javascript" });
          res.write(scriptFile);
          break;
        case "/serverSide/client.json":
          res.writeHead(200, "ok", { "set-cookie": "here = 'lala'" });
          res.end(myJson);
          break;
        case "/favicon.ico":
          res.writeHead(200, "ok", {
            "content-type": "image/vnd.microsoft.icon",
          });
          res.write(myIcon);
          break;
        // default:
        //   // res.write("<h1>No Page Found</h1>");
        //   break;
      }
      res.end();
    }
    // POST
    else if (req.method == "POST") {
      //url
      req.on("data", (data) => {
        totalData = data.toString().split("=");
        username = totalData[1].split("&")[0];
        number = totalData[2].split("&")[0];
        address = totalData[3].split("&")[0];
        email = decodeURIComponent(totalData[4].split("&")[0]);
        user = new User(username, number, address, email);
      });
      req.on("end", () => {
        fs.readFile("client.json", "utf8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            obj = JSON.parse(data);
            obj.clients.push(user);
            json = JSON.stringify(obj);
            fs.writeFile("client.json", json, "utf8", () => {});
          }
        });
        welcomePage = welcomePage.replace("{username}", user.name);
        welcomePage = welcomePage.replace("{number}", user.number);
        welcomePage = welcomePage.replace("{email}", user.email);
        welcomePage = welcomePage.replace("{address}", user.address);
        res.write(welcomePage);
        res.end();
      });
    }
    //#endregion
  })
  .listen("7000", () => {
    console.log("http://localhost:7000");
  });
