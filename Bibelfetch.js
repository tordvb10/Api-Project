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
const scripturesFetch = async (input = null) => {
    try{
        if(input === null){
            const response = await fetch(url, option)
            const fetchedBibles = await response.json()
            const norBible = []
        fetchedBibles.data.forEach((element) => {
            if(element.language.id === "nob"){
                norBible.push(element)
            }
        })
        console.log(norBible[0].id)
        return await scripturesFetch(norBible[0].id)
    } else {
        endpoint += `/${input}/verses/JHN.1.1` // chapters/JHN.1/verses
        url = `https://api.scripture.api.bible/v1/${endpoint}`
        const response = await fetch(url, option)
        const fetchedVerses = await response.json()
        return fetchedVerses
    }

    } catch (error){
        errorArray.push(error)
        console.log("Error fetching from api", error)
    }
}

const fetchedBibles = await scripturesFetch()
console.log(fetchedBibles)



console.log(errorArray)