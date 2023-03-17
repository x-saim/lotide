const head = require("../head.js");
const assertEqual = require("../assertEqual");

assertEqual(head([5, 6, 7]), 5); //pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
assertEqual(head(["element 1"]), "element 1"); //pass
assertEqual(head([]), undefined); //pass