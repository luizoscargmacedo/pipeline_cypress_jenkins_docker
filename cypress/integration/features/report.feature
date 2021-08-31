            # encoding: utf-8

            @samurai_reportv4
            Feature: Report_v4
            As a user would like to validate the reports

            @samurai_reportv4_spike
            Feature: REPORT V4 Spike Form and Financial Information
            Given already specific route to validate FI Report operation
            When a GET request is executed correctly using spike form
            Then the API will return a financial message successfully

            @samurai_reportv4_ragnar
            Feature: REPORT V4 Ragnar Form and Contact Information
            Given already specific route to validate CI report operation
            When a GET request is executed correctly using ragnar form
            Then the API will return a contact message correctly