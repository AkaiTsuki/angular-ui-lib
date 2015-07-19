/**
 * Created by jiachiliu on 7/19/15.
 */

(function(){
    'use strict';


    var atClock = function($interval, dateFilter){

        var timeId;

        var link = function(scope, ele, attrs) {
            function updateTime() {
                ele.text(dateFilter(new Date(), attrs.format));
            }

            ele.on('$destroy', function() {
                $interval.cancel(timeId);
            });

            timeId = $interval(updateTime, 1000);
        };


        return {
            restrict: 'E',
            link: link
        };

    };

    angular.module('AngularUILib').directive('atClock', ['$interval', 'dateFilter', atClock]);
})();