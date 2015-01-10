/* Write the definition of the function "say" such that calling this:
 *
 * say("Hello")("World")
 * returns "Hello World"    */
var say = function(a) {
    function(b) {
        return (a + " " + b);
    }
};
var a = "Hello", b = "World";
console.log(say(a)(b));