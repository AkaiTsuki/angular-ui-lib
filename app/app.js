/**
 * Created by jiachiliu on 7/17/15.
 */

(function () {
    'use strict';

    angular
        .module('AngularUILib', ['ngAnimate', 'ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state("root", {
                    abstract: true,
                    views: {
                        header: {
                            templateUrl: 'common/header.html'
                        },
                        footer: {
                            templateUrl: 'common/footer.html'
                        }
                    }
                })
                .state("root.home", {
                    url: '/home',
                    views: {
                        'main@': {
                            templateUrl: 'home/home.html'
                        }
                    }
                })
                .state('root.uibootstrap', {
                    url: '/uibootstrap',
                    abstract: true
                })
                .state('root.uibootstrap.datepicker', {
                    url: '/datepicker',
                    views: {
                        'main@': {
                            templateUrl: 'uiBootstrap/datepicker/datepicker.html',
                            controller: 'DatePickerController'
                        }
                    }
                });
        });
})();