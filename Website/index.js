//console.log(`Hello`);
//console.log(`I like Pizza`);

//window.alert(`This is an alert!`);
//window.alert(`I really like Pizza!`);

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like Pizza`;
let squareArray = (arr) => arr.map(x => x * x);
console.log (squareArray([1,4,6,2,7]));

let word = "I am a developer";
let wordArray = word.split(" ").reverse().join(" ");
console.log("Before reverse : " + word);
console.log("After reverse : " + wordArray);