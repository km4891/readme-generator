// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

   ${data.description}

  ## Repository

  ${data.repo}

  ## Table of Contents
  - [Insatllation](#Installation)
  - [Usage](#Isage)
  - [License](#License)
  - [Contributors](#Contributors)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributors} 
  


  ## Questions

  If you have any questions, please feel free to email @ ${data.email}.
  
  You can see more of my work at github.com/${data.username}





`;
}

module.exports = generateMarkdown;
