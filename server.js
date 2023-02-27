const http = require("http");
const fs = require("fs");
fs.writeFileSync("myfile.txt", "This is my text \n");
http
  .createServer((req, res) => {
    let url = req.url;
    if (url != "/favicon.ico") {
      let operator = url.split("/");
      let numbers = operator.slice(2);
      let result = 0;
      console.log(numbers);
      switch (operator[1]) {
        case "add":
          numbers.forEach((element) => {
            result += Number(element);
          });
          console.log(result);

          break;
        case "sub":
          result = numbers[0];
          numbers.slice(1).forEach((element) => {
            result = result - Number(element);
          });
          console.log(result);
          break;
        case "multiply":
          result = 1;
          numbers.forEach((element) => {
            result = result * Number(element);
          });
          console.log(result);
          break;
        case "division":
          result = 1;
          numbers.forEach((element) => {
            result = result / Number(element);
          });
          console.log(result);
          break;
        default:
          break;
      }

      fs.appendFileSync("myfile.txt", "" + result + "\n");
      res.write(`<h1>${result}</h1>`);
    }
    res.end();
  })
  .listen("3000", () => {
    console.log("hi");
  });
