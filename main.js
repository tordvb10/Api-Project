import * as createbutton from "./scripts/createbutton.js";
console.log("hello world");
createbutton.sayHi();
console.log(createbutton.button);

const APIkey = "3af8b89d0b868bd0d3a19e92c6ae82bd";
const bibelurl = `https://scripture.api.bible/admin/applications/api-key=${APIkey}`;

const bibelFetch = async () => {
  const response = await fetch(bibelurl);
  const data = await response.json();
  console.log(data);
};

bibelFetch();
