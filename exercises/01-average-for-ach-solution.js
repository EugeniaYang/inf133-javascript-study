var myArray = [6, 2, 8, 1, 2, 5, 3];
console.log('Array is ' + myArray);

var total = 0;
myArray.forEach(function(item) {
    total += item;
});

var avg = total / myArray.length;
console.log("Avg: " + avg);
