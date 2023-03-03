// trim()

let firstName = "    harshit    ";
console.log(firstName);
console.log(firstName.length);

let newFirstName = firstName.trim();

console.log(newFirstName);
console.log(newFirstName.length);

//toUpperCase()

let upFirstName = newFirstName.toUpperCase();
console.log(upFirstName);

// toLowerCase()

let lowFirstName = upFirstName.toLowerCase();
console.log(lowFirstName);

// slice()

let sliceFirstName = lowFirstName.slice(2,4);
console.log(sliceFirstName);