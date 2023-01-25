// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@cypress/code-coverage/support';
import addContext from 'mochawesome/addContext'

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: true
})


// Cypress.env('compoundName', 'cy_' + faker.name.lastName().toLowerCase());
// Cypress.env('compoundAlias', 'alias_' + Cypress.env('compoundName'));


Cypress.on('test:after:run', (test, runnable: Mocha.Suite) => {
    if (test.state === 'failed') {
      let item = runnable;
      const nameParts = [runnable.title]
  
      // Iterate through all parents and grab the titles
      while (item.parent) {
        nameParts.unshift(item.parent.title)
      //tslint:disable-next-line
        item = item.parent
        
      }
  
      const fullTestName = nameParts
              .filter(Boolean)
              .join(' -- ')           // this is how cypress joins the test title fragments
  
      const imageUrl = `screenshots/${
        Cypress.spec.name
      }/${fullTestName} (failed).png`
  
      addContext({ test }, imageUrl)
    }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
