export default async function scripturesFetch(input = "") {
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
       // errorArray.push(error)
        console.log("Error fetching from api", error)
    }
}