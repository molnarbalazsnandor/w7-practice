console.log("loaded");

let fetchURL =
  "https://api.nasa.gov/planetary/apod?api_key=uJpGIKfiHk9wuvj0wfw7zO9z7W3rFnslH31HrwLZ";

/* fetch(fetchURL).then(function (response) {
  console.log(response);
  console.log(response.json());
}); */
//fetch: lekéri az oldal, majd a .then, hogy mit kezdjen a válasszal
//érdemes ezt a then-es módszert használni; más nyelvekhez jó lesz
//alternatív módszer: async - await
//így csak egy ígéretet kapunk arra, hogy majd json formában megkapjuk a lekért adatokat

/* fetch(fetchURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (responseJson) {
    console.log(responseJson);
  }); */

/* fetch(fetchURL)
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson));
  */
// arrow function: => : ha csak egy soros function lenne, akkor az ezzel is megoldható

async function fetchNASA() {
  const response = await fetch(fetchURL);
  //console.log(response);
  const responseJson = await response.json();
  //console.log(responseJson);
  return responseJson;
}
//await: megvárja a fetch-el, amíg megkapja a response-t (nem lesz promise)
// de aszinkronná teszi a fv-t: ki kell tenni az elejére, hogy async

async function loadEvent() {
  let data = await fetchNASA();

  //hoisting: blokkban meghatárzott változót valójában már az első sor előtt létrehoz

  console.log("data:", data);

  const rootElement = document.querySelector("#root");
  rootElement.insertAdjacentHTML(
    "beforeend",
    `
    <h1>${data.title}</h1>
    <h2>${data.date}</h2>
    <p>${data.explanation}</p>
    <img src="${data.url}">
  `
  );
}

window.addEventListener("load", loadEvent);
