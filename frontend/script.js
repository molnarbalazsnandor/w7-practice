function loadEvent() {
  const rootElement = document.querySelector("#root");
  rootElement.insertAdjacentHTML("beforeend", "loaded");
}

//e helyett

const loadEvent2 = () => {
  const rootElement = document.querySelector("#root");
  rootElement.insertAdjacentHTML("beforeend", "loaded");
};

//window.addEventListener("load", loadEvent2);

//e helyett

window.addEventListener("click", () => console.log("click"));

//lényegében ami a nyíl után van, az lesz az arrow function belseje
//egysoros fv ek létrehozására alkalmas leginkább

const arr = ["soproni", "borsodi", "amstel", "kőbányai"];

arr.forEach(arrElement)=> console.log(arrElement);
