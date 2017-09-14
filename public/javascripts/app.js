'use strict';
angular.module('app', ['ngRoute', 'angular-carousel', 'restangular'])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .config(function ($routeProvider) { //Створюєм адреси
        $routeProvider
            .when('/', {
                templateUrl: './template/homePageDirective.tpl.html',
                controller: HomePageController,
                controllerAs: 'homePageCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .service('categoryDataService', function (Restangular) {
        return {
            getCategories: getCategories
        };

        function getCategories() {
            return Restangular.all('api/categories').getList()
        }
    })
    .controller('MainCtrl', function ($scope) {
        // $http.get('http://localhost:8000/login').then(function successCallback(response) {
        //     $scope.arr = response.data;
        // }, function errorCallback(response) {
        //     console.log("Error!!!" + response.err);
        // });
    })
    .directive('homePage', function () {
        return {
            restrict: 'E',
            templateUrl: './template/homePageDirective.tpl.html',
            replace: true,
            controller: HomePageController,
            controllerAs: 'homePageCtrl',
            bindToController: true,
            scope: {}
        }
    })
    .directive('categories', function () {
        return {
            replace: true,
            templateUrl: 'template/categories.tpl.html',
            controllerAs: 'categoriesCtrl',
            controller: function ($scope, categoryDataService) {
                const vm = this;
                vm.categories = [];

                categoryDataService.getCategories().then(function (categories) {
                    vm.categories = categories;
                })
            }
        }
    })
    .directive('popularSubCategories', function () {
        return {
            replace: true,
            templateUrl: 'template/popularSubCategories.tpl.html',
            controller: function ($scope) {
            }
        }
    })
    .directive('popularGoods', function () {
        return {
            replace: true,
            templateUrl: 'template/popularGoods.tpl.html',
            link: function (scope, element, attrs) {
            }
        }
    })
    .directive('asideInfo', function () {
        return {
            replace: true,
            templateUrl: 'template/asideInfo.tpl.html',
            link: function (scope, element, attrs) {
            }
        }
    });

function HomePageController($scope) {
    $scope.a = 'bbbbbb';
}


// .directive('slider', function () {
//     return {
//         replace: true,
//         templateUrl: 'template/slider.html',
//         link: function (scope, element, attrs) {
//         }
//     }
// });

