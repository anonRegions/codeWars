function min(arr, toReturn) {
    var val = Math.min.apply(null, arr);
    //console.log(val);
    return toReturn == 'value' ? val : arr.indexOf(val);
}
console.log(min([5,7,89,3,20,-2], 'value')); // => 1
//console.log(min([1,2,3,4,5], 'index')); // => 0
