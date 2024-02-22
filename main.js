import * as createbutton from "./scripts/createbutton.js";
console.log("hello world");
createbutton.sayHi();
console.log(createbutton.button);

const APIkey = "3af8b89d0b868bd0d3a19e92c6ae82bd";
const bibelurl = `https://api.scripture.api.bible/v1/swagger.json`;

const bibelFetch = async () => {
  const response = await fetch(bibelurl);
  const data = await response.json();
  console.log(data);
};

bibelFetch();
