/**
 * Created by jiachiliu on 7/28/15.
 */

describe('Angular UI Library Home Page', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8888/#/home');

        expect(browser.getTitle()).toEqual('Angular UI Library');
    });
});