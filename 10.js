// Feladat: Írj egy palindrom(szo) függvényt, ami visszaadja, hogy a szöveg palindróm-e.
//  Pl: "görög" → igaz, "alma" → hamis

let bekert_szo = prompt("Kerlek adj meg egy szot: ")

function palindrom(szo) {
    let kisbetus_szo = szo.toLowerCase()
    let szokoz_nelkuli_szo = kisbetus_szo.replace(/\s/g, "")
    let forditott_szo = szokoz_nelkuli_szo.split("").reverse()
    console.log(kisbetus_szo)
    console.log(forditott_szo)
    return szokoz_nelkuli_szo === forditott_szo
}

console.log(palindrom(bekert_szo))