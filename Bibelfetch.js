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
            for (let element of fetched.data){
                if(element.language.id === "nob"){
                    norBible.push(element)
                }
            }
        }
        console.log(!!norBible.length)
        return !!norBible.length ? norBible : fetched
    
    } catch (error){
        errorArray.push(error)
        console.log("Error fetching from api", error)
    }
}

async function allfetches(){
    const fetchedBibles = await scripturesFetch()
    console.log("hello world")
    console.log(fetchedBibles)
    const fetchedBooks = await scripturesFetch(`/${fetchedBibles[0].id}/books`)
    const IDs = []
    for (let Books of fetchedBooks.data){
        console.log(Books)
        const fetchChapters = await scripturesFetch(`/${fetchedBibles[0].id}/books/${Books.id}/chapters`)
        for (let Chapter of fetchChapters.data){
            if (!Chapter.id.includes("intro")){
                const fetchedVerses = await scripturesFetch(`/${fetchedBibles[0].id}/chapters/${Chapter.id}/verses`)
                for (let vers of fetchedVerses.data){
                    IDs.push(vers.id)
                }
            }
        }
    }
    return {"bibleId":fetchedBibles[0].id,"verseId":IDs}
}

const versesIDs = await allfetches()
console.log(versesIDs)

fs.writeFileSync("./verses.json",JSON.stringify(versesIDs))
