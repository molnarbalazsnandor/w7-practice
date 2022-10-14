fetch("https://swapi.dev/api/people")
  .then((response) => response.json())
  .then((people) => console.log(people));

//magyarázat: hívja meg az URL-t, then: várja meg a míg betölt, majd alakítsa át json ból js-es struktúrává majd abból kikérjük a people-t

/* const response = await fetch("https://swapi.dev/api/people");
const people = await respone.json;
console.log(people) 

ezek ekvivalens megoldások*/
