import fs from "fs"

let endpoint = `bibles`

let url = `https://api.scripture.api.bible/v1/${endpoint}`
console.log(url)

const option = {
    method: "GET",
    headers: {
        "api-key": '3af8b89d0b868bd0d3a19e92c6ae82bd',
        "accept": "application/json"
    }
}
const errorArray = []
const scripturesFetch = async (input = "") => {
    try{
        let path = url+input
        console.log(path)
        const response = await fetch(path, option)
        const fetched = await response.json()
        const norBible = []
        if (input === ""){
            fetched.data.forEach((element) => {
                if(element.language.id === "nob"){
                    norBible.push(element)
                }
            })
        }
        console.log(!!norBible.length)
        return !!norBible.length ? norBible : fetched
    
    } catch (error){
        errorArray.push(error)
        console.log("Error fetching from api", error)
    }
}

const fetchedBibles = await scripturesFetch()

console.log(fetchedBibles)

const fetchedBooks = await scripturesFetch(`/${fetchedBibles[0].id}/books`)
fs.writeFileSync("./verses.json","")
const IDs = []
fetchedBooks.data.forEach(async (Books) => {
    const fetchChapters = await scripturesFetch(`/${fetchedBibles[0].id}/books/${Books.id}/chapters`)
    fetchChapters.data.forEach(async (Chapter)=> {
        if (!Chapter.id.includes("intro")){
            const fetchedVerses = await scripturesFetch(`/${fetchedBibles[0].id}/chapters/${Chapter.id}/verses`)
            fetchedVerses.data.forEach(async (vers)=> {
               // console.log(vers.id)
                IDs.push(vers.id)
            })
        }
    })
})
console.log(IDs)
