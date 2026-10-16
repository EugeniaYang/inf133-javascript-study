var myArray = [6, 2, 8, 1, 2, 5, 3];
console.log('Array is ' + myArray);

var total = myArray.reduce(function(sum, current) {
    return sum + current;
}, 0);

var avg = total / myArray.length;
console.log("Avg: " + avg);
