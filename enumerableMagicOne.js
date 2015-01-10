/* Create a method all? which takes an array, and a block,
 * and returns true if the block returns true for every
 * element in the array. Otherwise, it should return
 * false. If the array is empty, it should return true,
 * since technically nothing failed the block test.  */
function all(arr, block) {
    
}

var numbers = [1, 0, 3, 2, 5, 4, 7, 6, 9, 8];
var petInventory = [{"Pet": "dog", "Legs": 4, "Num in Stock": 100},
    {"Pet": "cat", "Legs": 4, "Num in Stock": 50},
    {"Pet": "fish", "Legs": 0, "Num in Stock": 1000},
    {"Pet": "scorpion", "Legs": 8, "Num in Stock": 1},
    {"Pet": "beetle", "Legs": 6, "Num in Stock": 10000},
    {"Pet": "monkey", "Legs": 2, "Num in Stock": 2},
    {"Pet": "rock", "Legs": 0, "Num in Stock": 0}];
var pokeyThings = ["cactus", "poles", "knife",
    "cactus holding poles with knives attached"];
var evenNums = (num % 2 == true);

function posNums() {
    //are all numbers positive?

}
function petLegs() {
    //do all pets have legs?

}
function petsInStock() {
    //are all pets in stock?

}
function petsNamed() {
    //all pets have a name?

}
function threeLetters() {
    //do all pokey things have at least 3 letters?

}
function letterE() {
    //do all pokey things have the letter 'e'?

}

console.log(all(numbers, evenNums));