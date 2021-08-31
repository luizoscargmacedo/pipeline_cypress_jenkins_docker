# Cypress, Node.js and Cucumber 

## README 
Branch development-api, automation structure for automation testing.

#### Frameworks: 
- Node.js, Cucumber e Cypress.

#### Project Structure:
- Gherkin features (Cucumber) "cypress/integration"
- Steps definitions "cypress/support"
- Alternative to execute without BDD structure "healthproject.spec.js" "cypress/integration"
- Test Videos will be save on "cypress/videos"
- cucumber-html-report will be in "report" directory
- RETRIES method on index.js, to run again the step that failed 2 times.
- The second test screenshot will be in "mochawesome-report/snapshots/healthproject.feature/print"
- .gitignore rule to not upload the videos, screenshots and "node_modules"in repository
- Logs and methods are configured to appear on console during the execution.


#### Installation and Configuration: 
- Clone the project repository.
- Node.js is necessary.
- To install the project dependencies:
```sh
 npm install
```

- To install Cypress:
```sh
 npx cypress install
 ```


#### To run the automation tests:
```sh
./node_modules/.bin/cypress run
```
or 
```sh
npx cypress run
```

- To run by TAG follow the example below.
```sh
npm run tags TAGS='@authentication_spaceacademy'
```
or
```sh
npx cypress run TAGS='@authentication_spaceacademy'
```
or
```sh
npx cypress run --spec "cypress/integration/features/authentication.feature"

To run by TAG and generate a report.
```sh
npm run tags TAGS='@authentication' ; npm run report 
```


#### To run the automation tests on Jenkins Pipeline (with Docker Linux):
/devops/JenkinsFile


### Project Information:
Version: 1.2
Created: 2021-08-31

### Developed by:
- Luiz Oscar Guabiraba de Macedo
- luiz.gmacedo@gmail.com
