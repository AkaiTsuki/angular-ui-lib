/**
 * Created by jiachiliu on 7/28/15.
 */

describe('Angular UI Library Home Page', function() {
    it('should have a title', function() {
        browser.get('http://localhost:8888/#/directive/first-directive');

        expect(browser.getTitle()).toEqual('Angular UI Library');

        var rows = element.all(by.repeater('user in userList'));
        rows.then(function(records){
            expect(records.length).toEqual(3);
        });

    });
});