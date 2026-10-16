var myList = [
    {name: "Peter 1", score: 79},
    {name: "Peter 2", score: 91},
    {name: "Peter 3", score: 66},
    {name: "Peter 4", score: 99},
    {name: "Peter 5", score: 55}
];

var max = Number.NEGATIVE_INFINITY;
var maxName = "None"

myList.forEach(function({name, score}) {
    if (score > max) {
        max = score;
        maxName = name;
    }
});

console.log(maxName + " has the highest score: " + max);
