console.log("Hola desde la consola")

capitals = {
    Peru : "lima",
    Chile : "santiago",
    Argentina : "buenos aires",
    Bolivia : "la paz",
    Ecuador: "quito",
    Venezuela: "caracas",
    Colombia: "bogota",
    Uruguay: "montevideo",
    Paraguay: "asuncion",
    Brazil: "brasilia",
    Guyana: "georgetown",
    Surinam: "paramaribo"
}

let keys = Object.keys(capitals)
const countries = keys.length
let score = 0
let expected
function getCountry(){
    if(keys.length === 0){
        document.getElementById("game").innerHTML = "Final score: " + String(score)+"/"+String(countries)
        return false
    }
    let index = Math.floor(Math.random() * keys.length)
    document.getElementById("country-display").innerHTML = keys[index]
    expected = capitals[keys[index]]
    keys.splice(index, 1)
    console.log(expected)
    return true
}
function submit(){
    let divs = document.querySelectorAll('.block');

    /*
    */
    let body = document.body
    console.log(document.getElementById("answer").value.toLowerCase())
    if (document.getElementById("answer").value.toLowerCase() === expected){
        divs.forEach(function(div) {
            div.classList.add("flash-green")
            setTimeout(function(){div.classList.remove("flash-green")}, 300)
        });
        score += 1
        if (!getCountry()) return
    }else{
        divs.forEach(function(div) {
            div.classList.add("flash-red")
            setTimeout(function(){div.classList.remove("flash-red")}, 300)
        });
        score -= 0.5
    }
    document.getElementById("score").innerHTML = ("score: " + String(score))
    document.getElementById("answer").value = ""
}

getCountry()

document.getElementById('answer').onkeydown = function(e){
    if(e.key === "Enter"){
        e.preventDefault()
        submit()
    }
};