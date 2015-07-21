/**
 * Created by jiachiliu on 7/20/15.
 */
(function () {
    'use strict';

    var atDrag = function ($document) {
        var link = function (scope, ele, attrs) {

            // the top left position of the element
            var x = 0, y = 0;

            // the offset between mouse click position and top left of the element
            var deltaX = 0, deltaY = 0;

            ele.css({
                position: 'relative',
                cursor: 'pointer'
            });

            ele.on('mousedown', function (event) {
                event.preventDefault();
                deltaX = event.pageX - x;
                deltaY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                event.preventDefault();
                x = event.pageX - deltaX;
                y = event.pageY - deltaY;
                ele.css({
                    top: y + 'px',
                    left: x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        };

        return {
            link: link
        };
    };

    angular.module('AngularUILib').directive('atDrag', ['$document', atDrag]);

})();