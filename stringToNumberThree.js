/* The + sign in front of a variable will cast that
 * variable to a number.
 *
 * But unlike parseInt, it will not convert values
 * that are not true numbers, e.g. '10px'   */
var stringToNumber = function(str){
    return +str;
};

console.log(stringToNumber("1234")); // == 1234
