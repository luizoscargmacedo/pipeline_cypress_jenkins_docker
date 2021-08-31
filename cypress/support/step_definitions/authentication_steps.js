/// <reference types="Cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('already route for a user with {string}', () => {
    //Snippet - Report Identification
});


When('execute a {string} request, {string}, {string}', (string, string2, string3) => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false, url: 'https://turbo-api-dev.extremetest.io/authentication', body: {
            register_code: string,
            type: string3,
            password: string2
        }
    }).as('authroute778')
});

Then('the API response will return with {string} and {string}', (string, string2) => {
    cy.get('@authroute778').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string(string)
        expect(jsonData).to.have.string(string2)
    })
});
