const fields = require("./src/fields");
const yourInput = require("./inputHere");

// implement function
const output = JSON.stringify(fields(yourInput), null, "\n");

console.log(output);
// console.log(fields(yourInput).join().replace(',','\n'));
