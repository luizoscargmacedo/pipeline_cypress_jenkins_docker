var rimraf = require("rimraf")
rimraf("./mochawesome-report", function () { console.log("done"); });
rimraf("./cypress/cucumber-json", function () { console.log("done"); });