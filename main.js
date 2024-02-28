import content from "./verses.json" assert {type: "json"}
import createpage from "./scripts/createpage.js"

const endpoint = `bibles`

const url = `https://api.scripture.api.bible/v1/${endpoint}`

const option = {
    method: "GET",
    headers: {
        "api-key": '3af8b89d0b868bd0d3a19e92c6ae82bd',//process.env.API_KEY,
        "accept": "application/json"
    }
}

const scripturesFetch = async (bibleID,verseID) => {
    try{
        const response = await fetch(url+`/${bibleID}/verses/${verseID}`, option)
        if (response.ok !== true) {
            return;
        }
        const data = await response.json()
        //console.log(response)
        //console.log(data)
        return data
    } catch (error){
        console.log("Error fetching from api", error)
    }
}

console.log(content)
createpage() 
const button = document.querySelector(".Add-bibleverse-button").addEventListener("click", async ()=>{
    let RandomVers = await scripturesFetch(content.bibleId,content.verseId[Math.floor(Math.random()*content.verseId.length)])
    console.log(RandomVers)
    document.querySelector(".Add-bibleverse-paragraph").innerHTML = RandomVers.data.content
})

//
//console.log(RandomVers)
//document.body.innerHTML = RandomVers.data.content

//scripturesFetch()  