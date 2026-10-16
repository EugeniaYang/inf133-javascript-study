var student = { id: 88888888, firstName: "Peter", lastName: "Anteater" };

function studentID({ id }) {
    return id;
}

function fullName({ firstName, lastName }) {
    return "Fullname is " + firstName + " " + lastName;
}

console.log(studentID(student)); // 88888888
console.log(fullName(student)); // "Fullname is Peter Anteater"
