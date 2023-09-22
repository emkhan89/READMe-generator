// Use ES6 syntax to require the fs file and add the node files
// ============================================================
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// import fs from "fs";
// import inquirer from "inquirer";
const writeFileAsync = util.promisify(fs.writeFile);

// Type node index.js in the intergrated terminal to test it.
// ==========================================================

// install node files by typing npm init -y  AND   npm i inquirer in the integrated terminal
// =========================================================================================

// add inquirer prompt, with a list of question which will be written to the readme file.
// =====================================================================================

const questions = () =>
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
      type: "list",
      message: "What licenses are required with this project?",
      name: "license",
      choices: [
        "Apache license 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        "Boost Software License 1.0",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "what is your Github username",
      name: "github",
    },
    {
      type: "input",
      message: "what is your email address?",
      name: "emails",
    },
  ]);

const createReadMe = (answers) =>
  `# ${answers.filename}

## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [License](#license)
6. [Github](#github)
7. [Email](#email)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage 
${answers.usage}

## Contributors
${answers.contributors}

## License
${answers.license}

## Github
${answers.github}

## Email
${answers.email}

`;

questions()
  .then((answers) =>
    writeFileAsync("ReadMeGenerator.md", createReadMe(answers))
  )
  .then(() => console.log("Successfully created ReadMe file"))
  .catch((err) => console.error(err));
