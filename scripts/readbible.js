export default function readbible(data){
    data.forEach((element) => {
        if(element.language.id === "nob"){
            console.log(element)
        }
    });
    return true
}