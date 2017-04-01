'use strict';

angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl'});
    $routeProvider.when('/benefitDashboard', {templateUrl: 'partials/benefitsDashboard.html', controller: 'BenefitDashboardCtrl'});
    $routeProvider.when('/enrollmentSurvey1', {templateUrl: 'partials/enrollmentSurvey1.html', controller: 'EnrollmentSurvey1Ctrl'});
    $routeProvider.when('/enrollmentSurvey2', {templateUrl: 'partials/enrollmentSurvey2.html', controller: 'EnrollmentSurvey2Ctrl'});
    $routeProvider.when('/addPerson', {templateUrl: 'partials/addPerson.html', controller: 'AddPersonCtrl'});
    $routeProvider.when('/enrollmentDashboard', {templateUrl: 'partials/enrollmentDashboard.html', controller: 'EnrollmentDashboardCtrl'});
    $routeProvider.when('/enrollmentDashboardPayment', {templateUrl: 'partials/enrollmentDashboardPayment.html', controller: 'EnrollmentDashboardCtrl'});
    $routeProvider.when('/enrollmentDashboardAfterPayment', {templateUrl: 'partials/enrollmentDashboardAfterPayment.html', controller: 'EnrollmentDashboardCtrl'});
    $routeProvider.when('/benefitSelection', {templateUrl: 'partials/benefitSelection.html', controller: 'BenefitSelectionCtrl'});
    $routeProvider.when('/planselection', {templateUrl: 'partials/planSelection.html', controller: 'PlanSelectionCtrl'});
    $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);