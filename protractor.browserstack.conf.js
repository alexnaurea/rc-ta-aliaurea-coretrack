const defaultConfigSetup = require('./core/config-setup/default-config-setup.js');
const reportersSetup = require('./core/config-setup/reporters-setup');
const setupUtilities = require('./core/config-setup/setup-utilities');

exports.config = {
    restartBrowserBetweenTests: defaultConfigSetup.restartBrowserBetweenTests,
    SELENIUM_PROMISE_MANAGER: defaultConfigSetup.SELENIUM_PROMISE_MANAGER,
    allScriptsTimeout: defaultConfigSetup.allScriptsTimeout,
    getPageTimeout: defaultConfigSetup.getPageTimeout,
    suites: defaultConfigSetup.suites,
    params: defaultConfigSetup.params,
    baseUrl: defaultConfigSetup.baseUrl,
    framework: defaultConfigSetup.framework,
    jasmineNodeOpts: defaultConfigSetup.jasmineNodeOpts,
    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
    maxSessions: process.env.MAX_SESSIONS || setupUtilities.getParam(5, '--params.maxSessions', false), // unlimited, change to desired number based on parallel count for BS account
    multiCapabilities: defaultConfigSetup.bsMultiCapabilities,
    onPrepare() {
        reportersSetup.configureAllReporters();
    }
};