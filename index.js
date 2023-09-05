// Use ES6 syntax to require the fs file and add the node files
// Type node index.js in the intergrated terminal to test it.
const fs = require("fs");
const inquirer = require("inquirer");

// install node files by typing npm init -y  AND   npm i inquirer in the integrated terminal
inquirer.prompt([
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "your location",
    name: "location",
  },
  {
    type: "input",
    message: "your bio",
    name: "bio",
  },
  {
    type: "input",
    message: "Your Linkin profile",
    name: "Linkdin",
  },
  {
    type: "input",
    message: "your Github profile",
    name: "Github",
  },
]);
