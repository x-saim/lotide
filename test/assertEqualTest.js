const assertEqual = require("../assertEqual");

assertEqual("Lighthouse Labs", "Bootcamp"); //fail
assertEqual("Bootcamp", "Bootcamp");  //pass
assertEqual(1, 1);  //pass
assertEqual(1, 2);  //fail
