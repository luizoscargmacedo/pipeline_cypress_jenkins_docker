/// <reference types="Cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('already domain route', () => {
    //Snippet - Report Identification
});

When('a GET request is executed correctly', () => {
    cy.request({
        method : 'GET',
        url : 'https://turbo-api-dev.extremetest.io/viewlayer/domains',
        auth: {
           bearer: 'xyz445572sajh7nnrh5hhrhr6hh47oiygnnwy65373892mnbbkmnhgfdaa',
       },
    }).as('domainroute778')
});

Then('the API will return a status code 200 successfully', (int) => {
    cy.get('@domainroute778').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(response.body).have.property('clients');
        expect(jsonData).to.have.string("HOSPITAIS")
        expect(jsonData).to.have.string("WHATSAPP")
    })
});

Given('already an incorrect domain route', () => {
    //Snippet - Report Identification
});

When('a GET request is executed', () => {
    cy.request({
        method : 'GET',
        failOnStatusCode: false, url : 'https://turbo-api-dev.extremetest.io/viewlayer/domains/teste',
        auth: {
           bearer: 'xyz445572sajh7nnrh5hhrhr6hh47oiygnnwy65373892mnbbkmnhgfdaa',
       },
    }).as('domainroute27')
});

Then('the API will return a route not found code 404', (int) => {
    cy.get('@domainroute27').should((response) => {
        var jsonData = JSON.stringify(response.body)
        expect(jsonData).to.have.string('route not found')
    })
});