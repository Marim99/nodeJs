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
  constructor(id, seat_number, flight_number, departure, arrival, date) {
    this.id = id;
    this.seat_number = seat_number;
    this.flight_number = flight_number;
    this.departure = departure;
    this.arrival = arrival;
    this.date = date;
  }
}
  ```
  - Reservation [addTicket(ticket),getTicket(id),updateTicket(ticket)]




## Task2

**Client:** index.html, welcome.html, allData.html, fetchData.js, style.css

**Server:** Modules [User], client.json , server.js

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
