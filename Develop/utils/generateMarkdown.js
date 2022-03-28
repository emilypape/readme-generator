// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  } else if (license === 'Apache') {
    
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
#Table of Contents ${data}

## Description 
### ${data.description}

## Insallation
### ${data.installation}

## Usage
### ${data.usage}

## Contributing
### ${data.contributing}

## Tests
### ${data.tests}

## Questions
### ${data.github}
### ${data.questions}

`;
}

module.exports = generateMarkdown;
