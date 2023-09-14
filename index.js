// Use ES6 syntax to require the fs file and add the node files
// ============================================================
const fs = require("fs");
const inquirer = require("inquirer");
// import fs from "fs";
// import inquirer from "inquirer";

// Type node index.js in the intergrated terminal to test it.
// ==========================================================

// install node files by typing npm init -y  AND   npm i inquirer in the integrated terminal
// =========================================================================================

// add inquirer prompt, with a list of question which will be written to the readme file.
// =====================================================================================

inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "filename",
  },
  {
    type: "input",
    message: "Provide a brief description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their Github profiles.",
    name: "contributors",
  },
  {
    type: "input",
    message: "your Github profile",
    name: "tests",
  },
  {
    type: "input",
    message: "does this test work?",
    name: "test",
  },
]);

// TO DO
// couldnt figure out how to debug the error code
// write the file to the read me
// create the function
