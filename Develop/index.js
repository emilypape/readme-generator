// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'project name',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!')
            }
        }
    },
    {
        type: 'input',
        name: 'Project Description',
        message: 'Please provide a brief description of your project',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('A project description is required!')
            }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install your app?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please provide installation instructions!')
            }
        }

    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use your app?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Let the user know how your app works!')
            }
        }
    },
    {
        type: 'list',
        name: 'Licenses',
        message: 'What license was used for this project?',
        choices: ['Public domain', 'Apache', 'BSD', 'GNU', 'GPL', 'N/A'],
        validate: valueInput => {
            if(valueInput) {
                return true;
            } else {
                console.log('Please select a licensing option, if no licenses were used select "N/A".')
            }
        }
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Please provide instructions on how to contribute to this project!',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Help grow your project! Please provide contribution instructions!')
            }
        }
    },
    {
        type: 'confirm',
        name: 'Tests',
        message: 'Does your program include any tests?',
        choices: ['Yes', 'No'],
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Let us know if your program contains tests!');
            }
        }
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your github username?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please include your github username!');
            }
        }
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What email can you be reached at?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please include a valid email address!')
            }
        }
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
