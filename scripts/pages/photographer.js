//Mettre le code JavaScript lié à la page photographer.html
let dataPhotographer = "data/photographers.json";

let test = fetch(dataPhotographer)
.then(response => response.json())
.then(data => {
    JSON.stringify(data.photographers)
})

console.log(test)