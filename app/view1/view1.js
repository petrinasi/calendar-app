'use strict';

angular.module('calendar_app.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'DateService', '$log', function($scope, DateService, $log) {
        var d = new Date();
        var mm = d.getMonth();
        var yyyy = d.getFullYear();
        var dd = d.getDate();
        var dt = undefined;

        var numberOfDays = DateService.daysInMonth(mm, yyyy);

        function fillCalendarArray() {
            var fd = DateService.firstDay(mm, yyyy);
            var pos = 1;            
            var day = 1;

            /*angular.element(window.document.querySelector('.month')).append("<tr class=\"weekrow\"></tr>");
            for(var y=0; y<7; y++, pos++) {                       
                angular.element(window.document.querySelector('.weekrow')).append("<td>"+(pos+1)+"</td>");
            }*/
            
            for(var x=0; x<6; x++) {
                
                angular.element(window.document.querySelector('.month')).append("<tr class=\"weekrow\"></tr>");
                for(var y=0; y<7; y++, pos++) {
                    if (pos < fd || day > numberOfDays) {
                        angular.element(window.document.querySelector('.weekrow:last-child')).append("<td> </td>");             
                    }
                    else {
                        angular.element(window.document.querySelector('.weekrow:last-child')).append("<td>"+(day++)+"</td>");
                    }

                }
            }
            
            /*          var dataStore = [{}];
            var dayData = {
                show: false,
                date: {                    
                    day: 0,
                    month: mm,
                    year: yyyy                                      
                }
            };

            if (fd <= y || fd >= numberOfDays) {
                dayData.date.day += 1;
                dayData.date.show = true;
                dataStore[y-1].push(dayData);
            }
            else {
                dayData.show = false;
                dataStore[y-1].push(dayData);                    
            }
*/            
        };


        $log.log("Date: " + d.toDateString());
        $scope.calendarArray = fillCalendarArray();
        $scope.numberOfDays = numberOfDays;
        $scope.weekDay = DateService.weekDay(dd, mm, yyyy);
    }]);