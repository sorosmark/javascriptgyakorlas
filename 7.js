// Feladat: Készíts egy szavak tömböt, pl. ["alma", "körte", "barack"].
//  Írj egy osszefuz(tomb) függvényt, ami összefűzi őket egyetlen szöveggé, szóközökkel elválasztva.
//   "alma körte barack"

function osszefuz(tomb) {
    let szoveg = ""
    for (let i = 0; i < tomb.length; i++) {
        szoveg += tomb[i]
    }
    return szoveg
}

let osszefuzendotomb = ["alma", "körte", "barack"]
let osszefuzottszoveg = osszefuz(osszefuzendotomb)
console.log(osszefuzottszoveg)