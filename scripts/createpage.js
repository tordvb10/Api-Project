export default function createpage(){
    const button = document.createElement("button")
    button.classList.add("Add-bibleverse-button")
    button.innerText = "Generate a random bibleverse"
    const div = document.createElement("div")
    div.classList.add("Add-bibleverse-paragraph")
    document.body.appendChild(button)
    document.body.appendChild(div)
}