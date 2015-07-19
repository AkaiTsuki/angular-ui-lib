/**
 * Created by jiachiliu on 7/18/15.
 */

(function () {
    'use strict';

    var datepickerController = function($scope) {
        $scope.dt = new Date();

        $scope.dt1 = new Date();
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.clear = function(){
            $scope.dt1 = null;
        }
    };

    angular
        .module('AngularUILib').controller('DatePickerController', datepickerController);
})();