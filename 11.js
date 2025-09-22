// Feladat: Írj egy szamologep(a, b, muvelet) függvényt, ahol a muvelet lehet '+', '-', '*', '/'.
//  Pl: szamologep(6, 3, '*') -> 18

function szamologep(a, b, muvelet) {
    switch (muvelet) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            if (b === 0) {
                return "NEM (0 val nem osztunk)"
            }
            return a / b
        default:
            return "NEM"
}    
}

console.log(szamologep(5, 6, '+'))
console.log(szamologep(5, 6, '-'))
console.log(szamologep(5, 6, '*'))
console.log(szamologep(5, 0, '/'))