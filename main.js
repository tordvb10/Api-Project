import * as helps from "./scripts/createbutton.js";
import readbible from "./scripts/readbible.js";
console.log("hello world");
helps.sayHi();

const endpoint = `bibles`

const url = `https://api.scripture.api.bible/v1/${endpoint}`
console.log(url)

const option = {
    method: "GET",
    headers: {
        "api-key": '3af8b89d0b868bd0d3a19e92c6ae82bd',
        "accept": "application/json"
    }
}

const scripturesFetch = async () => {
    const response = await fetch(url, option)
    if (response.ok !== true) {
        return;
    }
    const data = await response.json()
    console.log(response)
    console.log(data)
    console.log(readbible(data.data))
}

scripturesFetch()