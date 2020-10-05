function badge(license) {
    if (license !== 'None') {
    return `![license](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
  }
  return '';
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${badge(data.license)}

  ## Description

   ${data.description}

  ## Repository

  ${data.repo}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This repository is covered under ${data.license} licensing.

  ## Contributors

  ${data.contributors} 
  


  ## Questions

  If you have any questions, please feel free to email @ ${data.email}.
  
  You can see more of my work at www.github.com/${data.username}





`;
}

module.exports = generateMarkdown;
