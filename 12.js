function faktorialis(num) {
    let eredmeny = 1
    for (let i = 1; i <= num; i++) {
        eredmeny *= i
    }
    return eredmeny
}
console.log(faktorialis(5))
console.log(faktorialis(20))