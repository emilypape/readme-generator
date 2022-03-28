// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
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
        name: 'description',
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
        name: 'installation',
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
        name: 'usage',
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
        name: 'license',
        message: 'What license was used for this project?',
        choices: ['Apache', 'BSD', 'Boost'],
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
        name: 'contributing',
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
        name: 'tests',
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
        name: 'github',
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
        name: 'questions',
        message: 'What email can you be reached at?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please include a valid email address!')
            }
        }
    }
]).then((input) => {
    //logic for buildin md
    // logic for writing to file
    // logic for anything that comes after input
    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile(`./${fileName}.md`, data, (err) => {
            if(err){
                console.log(err);
            }
            console.log('Your ReadMe has been generated, check out index.html for more information!');
        });
    };    
    // TODO: Create a function to initialize app
    function init() {
        const generateReadMe = generateMarkdown(input)
        var fileName = 'myGeneratedReadMe'
    
        writeToFile(fileName, generateReadMe)
    }
    
    // Function call to initialize app
    init();
})

