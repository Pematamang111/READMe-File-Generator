// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please name your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'please describe the purpose and functionality of this project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the license application to this project.',
        choices: ['MIT License', 'APACHE License 2.0', 'GNU General Public License v3.0','BSD 2.Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
                   'GNU Affero General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 
                    'The Unlicense']
    },
    {
        type: 'input',
        name: 'require',
        message: 'List any project dependencies here',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the steps required to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors. (Use Github usernames)',
        default: ' ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide walkthrough of required tests if applicable.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'State your full name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide a valid email address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err? console.error(error) : console.log('success');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>{
        writeToFile('./newReadme/README.md',  generateMarkdown({ ...response }))
    })
}

// Function call to initialize app
init();
