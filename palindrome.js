let x = 121
var isPalindrome = function(x) {

    //// .split() will convert the string to an array and .reverse() will reverse it and .join() wiil combine it form a string again

//     let check = x.toString().split('').reverse().join('');


///   the if statement will check if the converted x value is equal to the x value when converted to string also 

//     if (x.toString() === check) return(true);

//     return false

let check = '';

for (let i of x.toString()) {

    check = i + check;

}

return(check === x.toString());


};

isPalindrome(x)