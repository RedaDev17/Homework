/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    return f;
}

function f(n) {
    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        if (n===1) 
        {
            return [0, 1];
        } 
        else 
        {
            var s = f(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            // console.log(s);
        }

        memo[n] = value;
    }

    return s;
}
//console.log(fibonacci(15));