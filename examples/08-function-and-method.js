function name(param1, param2) {
}
var student = {
	firstName: "Peter",
	lastName: "Anteater",
	printName: function() {	
		console.log(this.firstName + " " + this.lastName);
	}
}
student.printName();		// Invokes the function
