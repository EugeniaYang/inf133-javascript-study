var student = { firstName: "Peter", lastName: "Anteater" };

function studentID({ id = 11111111 } = {}) {
    return id;
}

function fullName({ firstName = "default", lastName = "default" }) {
    return "Fullname is " + firstName + " " + lastName;
}

console.log(studentID(student)); // 11111111
console.log(fullName(student)); // "Fullname is Peter Anteater"
