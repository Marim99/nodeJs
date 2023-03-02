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
module.exports = {
  User,
};
