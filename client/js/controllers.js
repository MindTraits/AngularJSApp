'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('EmployeeListCtrl', ['$scope', 'Employee', '$location', function ($scope, Employee, $location) {
        $scope.employees = Employee.query();

        $scope.data = {
          group1 : 'Banana',
          group2 : '2',
          group3 : 'avatar-1'
        };

        $scope.goToDashboard = function(){
            console.log("aaa");
            $location.url('/dashboard');
        };
    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]).controller('DashboardCtrl', ['$scope', '$routeParams', '$location','Report', function ($scope, $routeParams,$location, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});

        $scope.goToBenefitDashboard = function(){
            $location.url('/benefitDashboard');
        };
        

    }]).controller('BenefitDashboardCtrl', ['$scope','$location', function ($scope,$location) {

        $scope.goToEnrollmentSurvey1 = function(){
            $location.url('/enrollmentSurvey1');
        };
        $scope.goBack = function(){
            $location.url('/dashboard');
        };
        $scope.benefitList = [
            {title:"Current Benefits",
             description:"Review your current 2016 benefits",
             glyphicons:"glyphicons glyphicons-hospital"
            },
            {title:"Report Life Event/Change",
             description:"Update coverage or add someone new.",
             glyphicons:"glyphicon glyphicon-user"
            },
            {title:"Forms & Documents",
             description:"Here find waivers, forms or plan documents.",
             glyphicons:"glyphicon glyphicon-list-alt"
            },
            {title:"401K",
             description:"Change of update your 401K contributions.",
             glyphicons:"glyphicon glyphicon-fire"
            }
        ];

    }]).controller('EnrollmentSurvey1Ctrl', ['$scope', '$routeParams', '$location','Report', function ($scope, $routeParams,$location, Report) {
        
        $scope.goBack = function(){
            $location.url('/benefitDashboard');
        };

        $scope.goNext = function(){
            $location.url('/enrollmentSurvey2');
        };

    
        $scope.dataList = [
            {title:"Response",
             value:1
            },
            {title:"Response",
             value:0
            },
            {title:"Response",
             value:0
            },
            {title:"Response",
             value:0
            },
            {title:"Response",
             value:0
            }
        ];

    }]).controller('EnrollmentSurvey2Ctrl', ['$scope', '$routeParams', '$location','Report', function ($scope, $routeParams,$location, Report) {
        
        $scope.goBack = function(){
            $location.url('/enrollmentSurvey1');
        };

        $scope.goNext = function(){
            $location.url('/enrollmentDashboard');
        };

        $scope.goToAddPerson = function(){
            $location.url('/addPerson');
        };
        
        
        $scope.personList = [
            {name:"Jane Taylor",
             description:"Wife"
            },
            {name:"James Taylor",
             description:"Son"
            },
            {name:"Janet Taylor",
             description:"Daughter"
            }
        ];

    }]).controller('EnrollmentDashboardCtrl', ['$scope', '$routeParams', '$location','Report', function ($scope, $routeParams,$location, Report) {
        
        $scope.goBack = function(){
            $location.url('/enrollmentSurvey2');
        };
        if(localStorage.hasOwnProperty("planselected")){
            $scope.planSelected = false;
        }else{
            $scope.planSelected = true;
        }

        if(localStorage.hasOwnProperty("paid")){
            $scope.hideList = false;
        }else{
            $scope.hideList = true;
        }

        $scope.payForPlan = function(){
            localStorage.setItem("paid","true");
        };
       /* $scope.goNext = function(){
            $location.url('/enrollmentSurvey2');
        };*/
        $scope.goToBenefitSelection = function(){
             $location.url('/benefitSelection');
        };

        $scope.medicalList = [
            {title:"Medical",
             description:"Healthcare Choice with HSA Efective: Sep 1, 2017"
            },
            {title:"Health Savings Account",
             description:"Optus Bank Efective: Sep 1, 2017"
            },
            {title:"Dental",
             description:"Dental Plus Plan Efective: Sep 1, 2017"
            }
        ];

    }]).controller('BenefitSelectionCtrl', ['$scope', '$routeParams', '$location','Report', function ($scope, $routeParams,$location, Report) {
        
        $scope.goBack = function(){
            $location.url('/enrollmentDashboard');
        };

       /* $scope.goNext = function(){
            $location.url('/enrollmentSurvey2');
        };*/
        $scope.selectPlan = function(data){
            localStorage.setItem("plan",JSON.stringify(data));
            $location.url('/planselection');
        };

        $scope.medicalList = [
            {price:"$250",
             title:"PLAN 1",
             description:"Healthcare Choice with HSA"
            },
            {price:"$225",
             title:"PLAN 2",
             description:"Healthcare Choice Plus"
            },
            {price:"$189",
             title:"PLAN 3",
             description:"Freedom Choice Select"
            }
        ];

    }]).controller('PlanSelectionCtrl', ['$scope', '$routeParams', '$location','Report', function ($scope, $routeParams,$location, Report) {
        
        $scope.goBack = function(){
            $location.url('/benefitSelection');
        };
        if(localStorage.hasOwnProperty("plan")){
            $scope.planData = JSON.parse(localStorage.getItem("plan"));
        }
       /* $scope.goNext = function(){
            $location.url('/enrollmentSurvey2');
        };*/
        
        $scope.selectPlan = function(){
            localStorage.setItem("planselected","true");
        };


        $scope.medicalList = [
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            }
        ];

    }]).controller('AddPersonCtrl', ['$scope', '$routeParams', '$location','Report', function ($scope, $routeParams,$location, Report) {
        
        $scope.goBack = function(){
            $location.url('/enrollmentSurvey2');
        };
    
       /* $scope.goNext = function(){
            $location.url('/enrollmentSurvey2');
        };*/
        
        $scope.addPerson = function(){
            //to do

            $location.url('/enrollmentSurvey2');
        };

        $scope.personData = [
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            },
            {slno:"$250"
            }
        ];

    }]);
