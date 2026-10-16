function addTwoNumbers(a, b, callback) {
    console.log("Adding two numbers..");
    var result = a + b;
    callback(a,b,result);
}
function printResults(x,y,z) {
    console.log(x + " + " + y + " = " + z);
}
addTwoNumbers(10,15,printResults);
