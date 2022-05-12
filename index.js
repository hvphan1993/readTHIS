// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
  return inquirer.prompt([
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
    // {
    //   // check if this is set up correctly
    //   type: 'list-input',
    //   name: 'license',
    //   message: 'Select the license used for your application. (Required)',
    //   choices: ['add more choices', 'more choices here']
    //   validate: licenseInput => {
    //     if (licenseInput) {
    //       return true;
    //     } else {
    //       console.log('Please select the license used!');
    //       return false;
    //     }
    //   }
    // },
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
    // {
    //   type: 'confirm',
    //   name: 'confirmAbout',
    //   message: 'Would you like to enter some information about yourself for an "About" section?',
    //   default: true
    // },
    // {
    //   type: 'input',
    //   name: 'about',
    //   message: 'Provide some information about yourself:',
    //   when: ({ confirmAbout }) => confirmAbout
    // }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

