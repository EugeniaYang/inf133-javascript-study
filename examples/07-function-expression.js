expression(); // TypeError: expression is undefined
catName("Chloe"); // Not reached after the error
function catName(name){ 
    console.log("My cat's name is " + name); 
}
var expression = catName; // Assigned here
