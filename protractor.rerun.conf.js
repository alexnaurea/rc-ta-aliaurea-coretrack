const defaultConfigSetup = require('./core/config-setup/default-config-setup');
const reportersSetup = require('./core/config-setup/reporters-setup');
exports.config = {
    restartBrowserBetweenTests: defaultConfigSetup.restartBrowserBetweenTests,
    SELENIUM_PROMISE_MANAGER: defaultConfigSetup.SELENIUM_PROMISE_MANAGER,
    allScriptsTimeout: defaultConfigSetup.allScriptsTimeout,
    suites: defaultConfigSetup.suites,
    capabilities: defaultConfigSetup.capabilities,
    params: defaultConfigSetup.params,
    directConnect: true,
    baseUrl: defaultConfigSetup.baseUrl,
    framework: defaultConfigSetup.framework,
    jasmineNodeOpts: defaultConfigSetup.jasmineNodeOpts,
    // Called once the tests have finished running and the WebDriver instance has been shut down
    onPrepare: function () {
        reportersSetup.configureAllReporters();
        const allureObject = allure._allure;
        allureObject.getCurrentSuite = () => {
            if (allureObject.suites.length > 0) {
                allureObject.suites[0].testcases = allureObject.suites[0].testcases.filter((c) => c.status !== 'pending');
            }
            return allureObject.suites[0];
        }
    },
};
