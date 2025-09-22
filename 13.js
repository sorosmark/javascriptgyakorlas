// Feladat: Legyen egy jegyek tömb: [5, 3, 4, 2, 5, 5, 3]
// Számold meg, hány darab 5-ös van benne!


// Számítsd ki az átlagot!
//  (használj for ciklust.)

let jegyek = [5, 3, 4, 2, 5, 5, 3]

otos = 0
for (let i = 0; i < jegyek.length; i++) {
    if (jegyek[i] === 5) {
        otos++
    }
}
console.log(otos)

let osszeg = 0
for (let i = 0; i < jegyek.length; i++) {
    osszeg += jegyek[i]
}

console.log(osszeg / jegyek.length)

