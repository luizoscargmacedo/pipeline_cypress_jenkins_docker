/// <reference types="Cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//Status 200 Historic Samurai22
Given('already specific route to validatate with {string}', () => {
    //Snippet - Report Identification
});

When('a GET request is executed correctly using {string}', (string3) => {
    cy.request({
        method: 'GET',
        failOnStatusCode: false, url: 'https://turbo-api-dev.extremetest.io/reports/jupiter/99999?token=xxxxx994', 
            auth: {
                bearer: string3
        }
    }).as('s200historic22')
});

Then('the API will return a {string} and code 200 successfully', (string2) => {
    cy.get('@s200historic22').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string(string2)
    })
});
