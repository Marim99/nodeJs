const container = document.querySelector("#container");
fetchData().then((data) => {
  data.clients.forEach((element) => {
    let html = `
    <div class="userElement">
    <h1>${element.name}</h>
    <p>Number = ${element.number}</p>
    <p>Adress = ${element.adress}</p>
    <p>Email = ${element.email}</p>
    </div>
    `;
    container.insertAdjacentHTML("afterbegin", html);
  });
});

async function fetchData() {
  let response = await fetch("../serverSide/client.json"); //fetch data by url
  let fetchedData = await response.text();
  let data = JSON.parse(fetchedData);
  return data;
}
