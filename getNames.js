/* The following code is not giving the expected
 * results. Can you figure out what the issue is?

 * The following is an example of data that would
 * be passed in to the function.   */
function getNames(data){
    var names = [];
    for (var i in data) {
        if (!names) names = names.push(data[i].name);
        else {
            names.push(data[i].name);
        }
    }
    return names;
}

var data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
];

console.log(getNames(data)); // should return ['Joe', 'Bill', 'Kate']