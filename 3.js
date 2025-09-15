// Feladat: Írj egy programot, ami három számot vizsgál, és kiírja a legnagyobbat.
//   használj if-else szerkezetet.

let a = 20, b = 20, c = 20
if (a > b && a > c) {
    console.log(a)
}
else if (b > a && b > c) {
    console.log(b)
}
else if (c > a && c > b) {
    console.log(c)
}
else console.log("egyenloek")