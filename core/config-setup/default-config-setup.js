const browserList = require('./browser-list.js');
const setupUtilities = require('./setup-utilities');
const { MAX_INSTANCES, HEADLESS_BROWSER, SOFT_ASSERTIONS } = process.env;

const browserStackBrowser = browserList[setupUtilities.getParam('chrome', '--params.browserstack.browser', false)];
const maxBrowserInstances = MAX_INSTANCES || setupUtilities.getParam(5, '--params.maxInstances', false);
const useHeadlessBrowser = HEADLESS_BROWSER || setupUtilities.toBoolean(setupUtilities.getParam(false, '--params.headlessBrowser', false));
const softAssertions = SOFT_ASSERTIONS || (setupUtilities.getParam(false, '--params.softAssertions', false));
const chromeHeadlessArgs =
    ['--headless',
        '--disable-gpu',
        '--window-size=1280x800',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-infobars',
        '--acceptInsecureCerts',
        '--ignore-certificate-errors',
        '--remote-debugging-port=9222',
        '--disable-blink-features=BlockCredentialedSubresources',
        '--disable-web-security'];
/*  ABOUT --disable-dev-shm-usage:
    By default, Docker runs a container with a /dev/shm shared memory space 64MB.
    This is typically too small for Chrome and will cause Chrome to crash when rendering large pages.
    To fix, run the container with docker run --shm-size=1gb to increase the size of /dev/shm.
    Since Chrome 65, this is no longer necessary. Instead, launch the browser with the --disable-dev-shm-usage flag

    sources:
        - https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#tips
        - https://developers.google.com/web/tools/puppeteer/troubleshooting
*/
const chromeOptions = {
    args: useHeadlessBrowser ? chromeHeadlessArgs : ['--disable-infobars'],
    // Set download path and avoid prompting for download even though
    // this is already the default on Chrome but for completeness
    prefs: {
        'download': {
            'prompt_for_download': false,
            'directory_upgrade': true,
            'default_directory': 'Downloads',
        },
    },
};
const configSetup = {
    restartBrowserBetweenTests: false,
    SELENIUM_PROMISE_MANAGER: false,
    multiCapabilities: [{
        browserName: 'chrome',
        'chromeOptions': chromeOptions,
        shardTestFiles: 'true',
        maxInstances: maxBrowserInstances,
        acceptInsecureCerts: true
    }],
    allScriptsTimeout: 300000,
    getPageTimeout: 90000,
    suites: {
        health_tests: './e2e/test-suites/health-check-test-suite/**/*.e2e-spec.ts',
        regression_tests: './e2e/test-suites/regression-test-suite/**/*.e2e-spec.ts',
        smoke_tests: './e2e/test-suites/smoke-test-suite/**/*.e2e-spec.ts'
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': chromeOptions,
        acceptInsecureCerts: true
    },
    bsMultiCapabilities: [{
        name: `${browserStackBrowser.os} ${browserStackBrowser.os_version}-${browserStackBrowser.browserName} v ${browserStackBrowser.browser_version || 'Latest'}`,
        'browserName': browserStackBrowser.browserName,
        'browser_version': browserStackBrowser.browser_version,
        'os': browserStackBrowser.os,
        'os_version': browserStackBrowser.os_version,
        'resolution': browserStackBrowser.resolution,
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || setupUtilities.getParam('', '--params.browserstack.user', false),
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || setupUtilities.getParam('', '--params.browserstack.key', false),
        'browserstack.local': process.env.BROWSERSTACK_LOCAL || setupUtilities.getParam(true, '--params.browserstack.local', false),
        'build': process.env.BROWSERSTACK_BUILD || setupUtilities.getParam('Local Build - Olive - ' + new Date().toISOString(), '--params.browserstack.build', false),
        'browserstack.debug': 'true',
        'acceptSslCerts': 'true',
        'trustAllSSLCertificates': 'true',
        'browserstack.timezone': 'UTC',
        'browserstack.safari.allowAllCookies': 'true',
        shardTestFiles: true,
        maxInstances: maxBrowserInstances
    }],
    params: {
        maxInstances: 5,
        maxSessions: 5,
        verboseLogging: process.env.ENABLE_VERBOSE_LOGGING || setupUtilities.getParam(false, '--params.enableVerboseLogging', false),
        users: {
            admin: {
                username: 'r1admin',
                password: 'editipt'
            }
        },
        softAssertions: softAssertions,
        testrail: {
            projectId: process.env.TESTRAIL_PROJECT_ID || setupUtilities.getParam(574, '--params.testrail.projectId', false),
            milestoneName: process.env.TESTRAIL_MILESTONE_NAME || setupUtilities.getParam('Automation milestone week', '--params.testrail.milestoneName', false),
            versionName: process.env.VERSION || setupUtilities.getParam('Default version name', '--params.testrail.versionName', false),
            host: process.env.TESTRAIL_HOST || setupUtilities.getParam('https://testrail.devfactory.com/', '--params.testrail.host', false),
            user: process.env.TESTRAIL_USER || setupUtilities.getParam('testrail.automation@aurea.com', '--params.testrail.user', false),
            password: process.env.TESTRAIL_PASSWORD || setupUtilities.getParam('Ra1MxzvkpwYyd7rwzAMG-QfKX0hg9EqO/TFm81UG7', '--params.testrail.password', false),
            milestoneNamePrefix: process.env.TESTRAIL_MILESTONE_NAME_PREFIX || setupUtilities.getParam('Automation milestone week', '--params.testrail.milestoneNamePrefix', false),
            planNamePrefix: process.env.TESTRAIL_PLAN_NAME_PREFIX || setupUtilities.getParam('Automation Test Plan', '--params.testrail.planNamePrefix', false),
            planId: process.env.TESTRAIL_PLAN_ID || setupUtilities.getParam(0, '--params.testrail.planId', false),
        },
        version: process.env.VERSION || setupUtilities.getParam('7.5.0', '--params.testrail.versionName', false),
        selenium: {
            hub: process.env.SELENIUM_URL || setupUtilities.getParam('http://10.69.8.112:4444/wd/hub', '--params.selenium.hub', false),
        },
        browserstack: {
            user: '', //Don't specify anything here it's just for a reference purpose that it can be a param
            key: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            local: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            localIdentifier: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            build: '',//Don't specify anything here it's just for a reference purpose that it can be a param
        }
    },
    baseUrl: 'http://testqa2.coretrac.dev.avolin.com', //QA Environment: http://testqa1.coretrac.dev.avolin.com
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000,
        print: function () {
        }
    }
};
module.exports = configSetup;
