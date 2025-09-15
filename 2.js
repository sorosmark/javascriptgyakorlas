// Feladat: Kérj be egy számot (prompt segítségével), és írd ki:
// "Pozitív" ha nagyobb mint 0
// "Negatív" ha kisebb mint 0
// "Nulla" 

 
let number = prompt("adj meg egy szamot: ")

let x = parseInt(number, 10)
console.log(x)
console.log(typeof(x))

if (number > 0) {
    console.log("pozitiv")
}
else if (number < 0) {
    console.log("negativ")
}
else console.log("nulla")
