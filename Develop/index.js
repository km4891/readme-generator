// global
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const promptUser = () => {
    return inquirer.prompt(questions)
};

// array of questions for user
const questions = [
    
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    
    {
        type: 'input',          
        name: 'email',
        message: 'What is your email?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'repo',
        message: 'Please provide a link to your repository.'
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },

    {
        type: 'input',          
        name: 'description',
        message: 'Please give a description of your project'
    },

    {
        type: 'list',          
        name: 'license',
        message: 'What type of license should your project have?',
        choices:['GNU', 'MIT', 'Apache', 'None']
    },
    
    {
        type: 'input',          
        name: 'installation',
        message: 'What is needed for installation?'
    },

    {
        type: 'input',          
        name: 'usage',
        message: 'What should the user know about using your repo?'
    },

    {
        type: 'input',          
        name: 'contributors',   
        message: 'Who has contributed to this repo?'
    },

   

];

// function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
    fs.writeFile('./responseREADME.md', data, err => {
     if (err) {
     reject(err);
        return;
            }

     resolve({
     ok: true,
    message: 'responseREADME.md file has been created!'
    });
    });
    });
};

// function to initialize program
function init() {
    promptUser()
        //.then(data => console.log(data))
        .then(data => writeToFile(generateMarkdown(data)));
        
        
}

// function call to initialize program
init();
