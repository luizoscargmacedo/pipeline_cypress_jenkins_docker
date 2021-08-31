 # encoding: utf-8

            @authentication
            Feature: Authentication
            As a user would like to perform the authentication procedure
           
            @authentication_mobile
            Scenario Outline: Authentication - mobile
            Given already route for a user with '<situation>'
            When execute a '<register_code>' request, '<password>', '<type>'
            Then the API response will return with '<status>' and '<message>'

            Examples:

            | situation                 | register_code  | password        | type     | status | message         |
            | mobile invalid dates      | mobile_API     | Test22hy567jki  | mobile   | 200    | token           | 
            | mobile incorrect code     | teste          | Test22hy568jki  | mobile   | 401    | unauthorized    |
            | mobile incorrect password | mobile_API     | test            | mobile   | 401    | unauthorized    |
            | mobile invalid type       | mobile_API     | Test22hy569jki  | teste    | 401    | unauthorized    |
            | mobile empty code         |                | Test22hy557jki  | mobile   | 400    | No Code         |
            | mobile empty type         | mobile_API     | Test22hy523jki  |          | 401    | unauthorized    |     
