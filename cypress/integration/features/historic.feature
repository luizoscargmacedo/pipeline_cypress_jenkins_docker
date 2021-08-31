# encoding: utf-8

            @historic
            Feature: Historic Samurai22
            As a user would like to validate the Historic

            @historic_status_200
            Scenario Outline: Status 200 Historic Samurai22
            Given already specific route to validatate with '<situation>'
            When a GET request is executed correctly using '<token>'
            Then the API will return a '<message>' and code 200 successfully

            Examples:
            | situation         | message        |token                                         |
            | Feature positive  | 797200806062   |jky5647nwewd423dwjkofjfhfjlkjh876432hgdfddef  |
            | Feature negative  | Invalid token  |jky5555555nwewd477777777777788888888hgdfddef  |
