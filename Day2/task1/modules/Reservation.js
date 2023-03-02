class Reservation {
  tickets = [];
  addTicket(ticket) {
    this.tickets.push(ticket);
  }
  getTicket(id) {
    let ticket = this.tickets.find((t) => t.id == id);
    return ticket;
  }
  updateTicket(ticket) {
    this.tickets.map((t) => {
      if (t.id == ticket.id) {
        t = ticket;
      }
    });
  }
}
module.exports = {
  Reservation,
};
