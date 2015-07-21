/**
 * Created by jiachiliu on 7/17/15.
 */

(function () {
    'use strict';

    angular
        .module('AngularUILib', ['ngAnimate', 'ui.router', 'ui.bootstrap'])

        // Config for root and home state
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
                });

        })
        // Config for Bootstrap component
        .config(function ($stateProvider) {

            $stateProvider
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
        })

        // config for directive component
        .config(function ($stateProvider) {
            $stateProvider
                .state('root.directive', {
                    url: '/directive',
                    abstract: true
                })
                .state('root.directive.first', {
                    url: '/first-directive',
                    views: {
                        'main@': {
                            templateUrl: 'directive/firstDirective/firstDirective.html',
                            controller: 'FirstDirectiveController'
                        }
                    }
                })
                .state('root.directive.table', {
                    url: '/table',
                    views: {
                        'main@': {
                            templateUrl: 'directive/table/index.html',
                            controller: 'TestHarnessController'
                        }
                    }
                })
                .state('root.directive.clock', {
                    url: '/clock',
                    views: {
                        'main@': {
                            templateUrl: 'directive/clock/index.html',
                            controller: 'TestHarnessController'
                        }
                    }
                })
                .state('root.directive.dialog', {
                    url: '/dialog',
                    views: {
                        'main@': {
                            templateUrl: 'directive/dialog/index.html',
                            controller: 'TestHarnessController'
                        }
                    }
                })
                .state('root.directive.drag', {
                    url: '/drag',
                    views: {
                        'main@': {
                            templateUrl: 'directive/drag/index.html',
                            controller: 'TestHarnessController'
                        }
                    }
                });
        });
})();