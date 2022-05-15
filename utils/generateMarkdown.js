// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  
  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
  } 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
 
  // select license used
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "GNU":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break; 
    case"MPL 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "Other":
      licenseLink = ""
      break;
    default:
      licenseLink = "";
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ""

  // create license section if license selected and include link to license info
  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += "See " + renderLicenseLink(license) + " to get more information about this license\n";
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}
  "See " + ${renderLicenseLink(data.license)} + " to get more information about this license\n"

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Contact Information:
  - Github: [${data.githubUserName}](https://github.com/${data.githubUserName})
  - Email: [${data.email}](mailto:user@testexample.com)

`;
}

module.exports = generateMarkdown;
