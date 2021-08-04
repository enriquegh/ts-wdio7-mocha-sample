import { cloneCapabilities } from "./utils";

// process.env.NODE_DEBUG = "request";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// process.env.GLOBAL_AGENT_HTTP_PROXY = "http://localhost:8889";
const NUM_OF_INSTANCES = process.env.WDIO_CAP_MULTIPLIER || 1;
const datetime = new Date();
const baseCapability = {
    browserName: "chrome",
    browserVersion: "latest",
    platformName: "Windows 10",
    'sauce:options': {
        build: `HIGH CCY BUILD - ${NUM_OF_INSTANCES} CCY - ${datetime}`
    }
};

const config: WebdriverIO.Config  = {

    runner: 'local',
    automationProtocol: 'webdriver',

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,    
    
    specs: [
        './tests/sample-google.ts'
    ],

    maxInstances: 20,
    capabilities: cloneCapabilities(baseCapability, NUM_OF_INSTANCES),
    logLevel: 'debug',
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
    }
}

export { config }
