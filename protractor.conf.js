/**
 * Created by jiachiliu on 7/28/15.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: 'node_modules/selenium/selenium-server-standalone-2.45.0.jar',
    specs: ['./app/**/*.spec.js']
};