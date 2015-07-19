/**
 * Created by jiachiliu on 7/19/15.
 */

(function () {
    'use strict';

    var firstDirectiveController = function ($scope) {
        $scope.loginUsers = [{
            firstName: 'John',
            lastName: 'Smith',
            address: '10 Lincoln Street, Boston, MA, 02114'
        },{
            firstName: 'Marry',
            lastName: 'Smith',
            address: '10 Lincoln Street, Boston, MA, 02114'
        },{
            firstName: 'Lin',
            lastName: 'Cole',
            address: '22 Lincoln Street, Boston, MA, 02114'
        }];
    };

    var atUserList = function () {
        return {
            restrict: 'E',
            templateUrl: 'directive/firstDirective/at.user.list.tmpl.html',
            scope: {
                userList: '=users'
            }
        };
    };

    angular.module('AngularUILib')
        .controller('FirstDirectiveController', firstDirectiveController)
        .directive('atUserList', atUserList);

})();