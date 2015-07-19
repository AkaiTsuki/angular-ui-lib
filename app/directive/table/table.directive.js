/**
 * Created by jiachiliu on 7/19/15.
 */

(function(){
    'use strict';

    var atTable = function() {
        return {
            restrict: 'E',
            templateUrl: 'directive/table/table.directive.html',
            scope: {
                data: '=',  // if the attr name is same as scope hash key, it can be ignored
                header: '=' // equally saying: header: '=header'
            }
        };
    };

    angular.module('AngularUILib')
        .directive('atTable', atTable);
})();