/// <reference types="Cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//Senario: REPORT V4 Spike Form and Financial Information
Given('already specific route to validate FI Report operation', () => {
    //Snippet - Report Identification
});

When('a GET request is executed correctly using spike form', () => {
    cy.request({
        method : 'GET',
        failOnStatusCode: false, url : 'https://turbo-api-dev.extremetest.io/reports/jupiter/99999?token=xxxxx994',
        auth: {
           bearer: '',
       },
    }).as('reportv4r1')
});

Then('the API will return a financial message successfully', (int) => {
    cy.get('@reportv4r1').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string('document.FinancialSpikeCount()');
    })
});

//Senario: REPORT V4 Ragnar Form and Contact Information
Given('already specific route to validate CI report operation', () => {
    //Snippet - Report Identification
});

When('a GET request is executed correctly using ragnar form', () => {
    cy.request({
        method : 'GET',
        failOnStatusCode: false, url : 'https://turbo-api-dev.extremetest.io/reports/jupiter/99999?token=xxxxx994',
        auth: {
           bearer: '',
       },
    }).as('reportv4r2')
});

Then('the API will return a contact message correctly', (int) => {
    cy.get('@reportv4r2').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string('document.RagnarID.Name.Phone.Count()');
    })
});