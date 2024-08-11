let mountainsDemo = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

function generateTableHeadDemo(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTableDemo(table, data) {
  console.log("genTab-1 " + data);
  for (let element of data) {
    console.log("genTab-2 " + element);
    let row = table.insertRow();
    for (key in element) {
      console.log("genTab-3 " + key);
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

//let table = document.querySelector("table");
let table = document.getElementById("tabledemo");
let dataDemo = Object.keys(mountainsDemo[0]);
console.log(dataDemo);

generateTableDemo(table, mountainsDemo);
generateTableHeadDemo(table, dataDemo);