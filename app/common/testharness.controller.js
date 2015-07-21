/**
 * Created by jiachiliu on 7/19/15.
 */

(function(){
    'use strict';

    var TestHarnessController = function($scope){

        // Fake data goes below
        // Fake User Data
        $scope.users = [{
            firstName: 'John',
            lastName: 'Smith',
            street: '10 Lincoln Street',
            city: 'Boston',
            zip: '02114'
        },{
            firstName: 'Marry',
            lastName: 'Smith',
            street: '10 Lincoln Street',
            city: 'Boston',
            zip: '02114'
        },{
            firstName: 'Lin',
            lastName: 'Cole',
            street: '14 Lincoln Street',
            city: 'Boston',
            zip: '02114'
        }];

        // Fake Product Data
        $scope.products = [
            {
                name: 'Apple Watch',
                price: 599,
                sell: 100000
            },{
                name: 'Iphone 6',
                price: 499,
                sell: 234234223
            },{
                name: 'IPod',
                price: 499,
                sell: 232634
            }
        ];

        // Fake Table Header for Table Directive
        $scope.header = ['First Name', 'Last Name', 'Street', 'City', 'Zip'];

        $scope.closeDialog = function(message, directiveMsg){
            console.log(message);
            console.log(directiveMsg);
        };
    };

    angular.module('AngularUILib')
        .controller('TestHarnessController', TestHarnessController);
})();