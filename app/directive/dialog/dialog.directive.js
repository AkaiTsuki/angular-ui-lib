/**
 * Created by jiachiliu on 7/19/15.
 */

(function(){
    'use strict';


    var atDialog = function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'directive/dialog/dialog.directive.html',
            scope: {
                dialogTitle: '='
            }
        };
    };

    angular.module('AngularUILib').directive('atDialog', [atDialog]);
})();