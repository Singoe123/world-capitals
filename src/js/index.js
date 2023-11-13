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
    Surinam: "paramirabo"
}

let keys = Object.keys(capitals)
let expected = undefined
function getCountry(){
    let index = Math.floor(Math.random() * keys.length)
    document.getElementById("country-display").innerHTML = keys[index]
    expected = capitals[keys[index]]
    console.log(expected)
}
function submit(){
    let body = document.body
    console.log(document.getElementById("answer").value.toLowerCase())
    if (document.getElementById("answer").value.toLowerCase() === expected){
        body.classList.add("flash-green")
        setTimeout(function(){body.classList.remove("flash-green")}, 300)
        getCountry()
    }else{
        body.classList.add("flash-red")
        setTimeout(function(){body.classList.remove("flash-red")}, 300)
    }
    document.getElementById("answer").value = ""
}

getCountry()

document.getElementById('answer').onkeydown = function(e){
    if(e.key === "Enter"){
        e.preventDefault()
        submit()
    }
};