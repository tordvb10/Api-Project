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

const errorArray = []
const scripturesFetch = async (input) => {
    try{
        const response = await fetch(url+input, option)
        if (response.ok !== true) {
            return;
        }
        const data = await response.json()
        //console.log(response)
        //console.log(data)
        return data
    } catch (error){
        errorArray.push(error)
        console.log("Error fetching from api", error)
    }
}

createpage() 
const button = document.querySelector(".Add-bibleverse-button").addEventListener("click", async ()=>{
    let RandomVers = await scripturesFetch(`/${content.bibleId}/verses/${content.verseId[Math.floor(Math.random()*content.verseId.length)]}`)
    document.querySelector(".Add-bibleverse-paragraph").innerHTML = "<br/>" + RandomVers.data.content + "<br/>" + RandomVers.data.reference
    document.querySelector(".Add-bibleverse-paragraph span").innerHTML = ""
})

//
//console.log(RandomVers)
//document.body.innerHTML = RandomVers.data.content

//scripturesFetch()  