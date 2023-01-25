/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// @ts-ignore
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve( 'cypress', 'config', `cypress.${file}.json`)
    return fs.readJSONSync(pathToConfigFile)
}
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    const file = config.env.configFile || 'local';
    Object.assign(config, getConfigurationByFile(file));
    if(file === 'local') {
        // No need to activate code coverage task for dev or other environnement because code is not instrumented for coverage
        require('@cypress/code-coverage/task')(on, config);
    }
    // include any other plugin code...
    // IMPORTANT to return the config object
    // with the any changed environment variables
    return config
}

