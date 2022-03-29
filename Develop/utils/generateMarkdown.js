// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  } else if (license === 'Apache') {
    return `![${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === 'BSD') {
    return `![${license}](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (license === 'Boost') {
    return `![${license}](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  }
  return license;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  } else if (license === 'Apache') {
    return `![${license}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD') {
    return `![${license}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'Boost') {
    return `![${license}](https://www.boost.org/LICENSE_1_0.txt)`
  }
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return`
  ## 
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseSection(data.license)}

Table of Contents
---------------------------------
## [Description](#Description)
## [Installation](#Installation)
## [Licensing](#License)
## [Usage](#Usage)
## [Contributing](#Contributing)
## [Tests](#Tests)
## [Questions](#Questions)
----------------------------------



<a id= 'Description'><a>
## Description :

### ${data.description}
-----------------------

<a id= 'Installation'><a>
## Insallation :
### ${data.installation}
------------------------

<a id= 'License'><a>
## Licensing :
### Licensing through ${renderLicenseSection(data.license)}
------------------------

<a id= 'Usage'><a>
## Usage :
### ${data.usage}
------------------

<a id= 'Contributing'><a>
## Contributing :
### ${data.contributing}
-------------------------

<a id= 'Tests'><a>
## Tests :
### Were tests used in this application? ${data.tests}
------------------------------------------------------- 

<a id= 'Questions'><a>
## Questions :
### Github: [${data.github}](https://github.com/${data.github})
### Email: ${data.questions}
-----------------------------

`;
}

module.exports = generateMarkdown;
