import { cloneCapabilities } from "./utils";

// process.env.NODE_DEBUG = "request";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// process.env.GLOBAL_AGENT_HTTP_PROXY = "http://localhost:8889";
const NUM_OF_INSTANCES = process.env.WDIO_CAP_MULTIPLIER || 1;
const baseCapability = {

    "browserName": "chrome",
    "platformName": "Windows 10",
    "browserVersion": "latest",
    "sauce:options": {
        // "capturePerformance": true,
        // "extendedDebugging": true
    }

}

const config: WebdriverIO.Config  = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    automationProtocol: 'webdriver',

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    // sauceConnect: true,
    
    
    specs: [
        './tests/sample-google.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 20,
    capabilities: cloneCapabilities(baseCapability, NUM_OF_INSTANCES),
    logLevel: 'debug',
    // logLevels: {
        // webdriver: 'info',
        // 'wdio-applitools-service': 'info'
    // },
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    services: ['sauce'],
    framework: 'mocha',
    reporters: [
        'spec',
    ],
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        timeout: 400000,
        compilers: ['ts:ts-node/register'], 
    },

    before: function (capabilities, specs) {
    },
}

export { config }