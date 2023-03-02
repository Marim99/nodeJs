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

module.exports = {
  Ticket,
};
