// solution 1
function is_even_recursion(number) {
    if (number < 0) {
        number = Math.abs(number);
    }
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    else {
        number = number - 2;
        return is_even_recursion(number);
    }
}
console.log(is_even_recursion(234)); //true
console.log(is_even_recursion(-45)); // false
console.log(is_even_recursion(65)); // false

// solution 2
const is_Even = num => num % 2 === 0;
const is_Odd = num => num % 2 === 1;
console.log("Test even number!")
console.log(is_Even(1));
console.log(is_Even(4));
console.log(is_Even(100));
console.log("Test odd number!")
console.log(is_Odd(1));
console.log(is_Odd(4));
console.log(is_Odd(107));
