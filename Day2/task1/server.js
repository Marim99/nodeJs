const myClass = require("./modules/Reservation");
const { Ticket } = require("./modules/Ticket");

const reservation = myClass.Reservation;
let user1 = new reservation();
let ticket1 = new Ticket(1, 3, 5, "alex", "cairo", "2023/9/9");
let ticket2 = new Ticket(2, 7, 6, "cairo", "aswan", "2023/9/9");
let ticket3 = new Ticket(3, 4, 5, "alex", "aswan", "2023/9/9");

user1.addTicket(ticket1);
user1.addTicket(ticket2);
user1.addTicket(ticket3);

ticket3.date = "2023/10/9";
user1.updateTicket(ticket3);

console.log("ticket 2 =", user1.getTicket(2));
console.log(user1.tickets);
