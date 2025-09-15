// Feladat: Írj egy legnagyobb(tomb) függvényt, ami visszaadja a tömb legnagyobb elemét.
//  Pl: legnagyobb([3,7,2]) -> 7

function legnagyobb(tomb){
    let max = tomb[0]
    for (let i = 0; i < tomb.length; i++) {
        if (max < tomb[i]) {
            max = tomb[i]
        }
    }
    return max
}

let result = legnagyobb([3,7,2])
console.log(result)