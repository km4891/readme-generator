// array of questions for user
const questions = [
    
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    
    {
        type: 'input',          
        name: 'email',
        message: 'What is your email?'
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
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
        message: 'What is your Github username?'
    },

    {
        type: 'input',          
        name: 'usage',
        message: 'What should the user know about using your repo?'
    },

    {
        type: 'input',          
        name: 'contributing',   
        message: 'Who has contributed to this repo?'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?',
        default: 'npm test'
    },



];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
