// Feladat: Írj egy emailValidator(email) függvényt, ami ellenőrzi, hogy a megadott szöveg tartalmazza-e az @ jelet és a .-ot.
//  Pl:
// "valaki@gmail.com" → helyes


// "valaki.gmail.com" → hibás

function emailValidator(email) {
    if (email.includes('@')) {
        return 'helyes'
    }
    else return 'hibas'
}
console.log(emailValidator('valaki@gmail.com'))