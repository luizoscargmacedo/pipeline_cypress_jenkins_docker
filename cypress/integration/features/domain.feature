# encoding: utf-8

            @domain
            Feature: Domain
            As a user would like to validate the Domains route

            @domain_positive
            Feature: Domain - Positive
            Given already domain route
            When a GET request is executed correctly
            Then the API will return a status code 200 successfully
            
            @domain_negative
            Feature: Domain - Negative
            Given already an incorrect domain route
            When a GET request is executed
            Then the API will return a route not found code 404
