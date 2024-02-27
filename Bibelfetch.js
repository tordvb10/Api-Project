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
        const response = await fetch(url+input, option)
        const fetchedBibles = await response.json()
        console.log(fetchedBibles)
        const norBible = []
        fetchedBibles.data.forEach((element) => {
            if(element.language.id === "nob"){
                norBible.push(element)
                return
            }
        })
        console.log(norBible[0].id)
        return norBible[0].id
    
    } catch (error){
        errorArray.push(error)
        console.log("Error fetching from api", error)
    }
}

const fetchedBibles = await scripturesFetch()
console.log(fetchedBibles)



console.log(errorArray)