const testing = (n) => {
    if (n === 0 || n === 1) {
        return String(n)
    }
    return testing(Math.floor(n / 2)) + String(n % 2)
}
console.log(testing(1))
console.log(testing(0))
console.log(testing(10))
console.log(testing(101))
