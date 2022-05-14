// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to my README generator!")
console.log("Answer the following questions to generate a high quality README for your project!")
// TODO: Create an array of questions for user input
const questions = [
  // Project Name
  {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your application? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },

  // Project Description
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your application. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a brief description of your application!');
          return false;
        }
      }
    },

    // Installation Instructions
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter instructions for installing your application. (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter the instructions to install your application!');
          return false;
        }
      }
    },

    // Usage Information
    {
      type: 'input',
      name: 'usage',
      message: 'Enter how your application is used. (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter how the user can use your application!');
          return false;
        }
      }
    },

    // Contribution Guidelines
     {
      type: 'input',
      name: 'contribution',
      message: 'Enter a brief description of how someone can contribute to your application. (Required)',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines for your application!');
          return false;
        }
      }
    },

    // Testing Instructions
     {
      type: 'input',
      name: 'testing',
      message: 'Enter a brief description of how to test your application. (Required)',
      validate: testingInput => {
        if (testingInput) {
          return true;
        } else {
          console.log('Please enter a brief description of how to test your application!');
          return false;
        }
      }
    },

    // Get License
     {
      // check if this is set up correctly and look up license types
      type: 'checkbox',
      name: 'license',
      message: 'Select the license used for your application. (Required)',
      choices: ['MIT', 'GNU', 'MPL 2.0', 'Apache', 'Other'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please select the license used!');
          return false;
        }
      }
    },
    // Github username
     {
      type: 'input',
      name: 'githubUserName',
      message: 'Enter your Github username. (Required)',
      validate: githubUserNameInput => {
        if (githubUserNameInput) {
          return true;
        } else {
          console.log('Please enter your Github username!');
          return false;
        }
      }
    },

    // User email
     {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter a valid email address!');
          return false;
        }
      }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! You can now preview your README file!");
    
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();
