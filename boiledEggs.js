/* Implement a function, which takes a non-negative integer,
 * representing the number of eggs to boil. It must return the time in
 * minutes (integer), which it takes to have all the eggs boiled.

Rules
1. you can put at most 8 eggs into the pot at once
2. it takes 5 minutes to boil an egg
3. we assume, that the water is boiling all the time (no time to heat up)
4. for simplicity we also don't consider the time it takes to put eggs
into the pot or get them out of it

Example

cooking_time 0 # must return 0
cooking_time 5 # must return 5
cooking_time 10 # must return 10    */
function cookingTime(eggs) {
    return 5 * Math.ceil(eggs / 8);
}
var eggs = 18;
console.log(cookingTime(eggs));