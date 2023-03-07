# nodeJs

## Day2 

## Task1
- modules
  - Ticket
  ``` 
  class Ticket {
  id;
  seat_number;
  flight_number;
  departure;
  arrival;
  date;
  constructor(id, seat_number, flight_number,departure, arrival, date) {
    this.id = id;
    this.seat_number = seat_number;
    this.flight_number = flight_number;
    this.departure = departure;
    this.arrival = arrival;
    this.date = date;
  }}


 - Reservation [addTicket(ticket),getTicket(id),updateTicket(ticket)]




## Task2

**Client:** index.html, welcome.html, allData.html, fetchData.js, style.css

**Server:** Modules [User], client.json , server.js


## Day 3
[ ] get
```
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
```
[ ] post
```
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

```

User 
```
class User {
  name;
  number;
  address;
  email;
  constructor(name, number, address, email) {
    this.name = name;
    this.number = number;
    this.address = address;
    this.email = email;
  }
}
```


## Day4 
[Chat app 🔗](https://github.com/Marim99/Chat-NodeJs-App)
