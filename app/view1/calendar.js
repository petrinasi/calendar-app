angular.module('calendar_app').factory('DateService', function($log) {
        
    function getNmbrOfDays(mm, yyyy) {
        var daysOfMonth;
        if ((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) {
            daysOfMonth = 30;
        }
        else {
            daysOfMonth = 31;
            if(mm == 2) {
                if (yyyy/4 - parseInt(yyyy/4) != 0) {
                    daysOfMonth = 28;
                }
                else {
                    if (yyyy/100 - parseInt(yyyy/100) != 0) {
                        daysOfMonth = 29;
                    }
                    else {
                        if (yyyy/400 - parseInt(yyyy/400)!=0) {
                            daysOfMonth = 28;
                        }
                        else {
                            daysOfMonth =29;
                        }
                    }
                }
            }
        }
        return daysOfMonth;
    }

    function getDayOfWeek(dd, mm, yyyy) {
        var d = new Date(yyyy, mm, dd);
        var dayOfWeek = undefined;
        switch (d.getDay()) {
            case 1:
                dayOfWeek = 'Ma';
                break;
            case 2:
                dayOfWeek = 'Ti';
                break;
            case 3:
                dayOfWeek = 'Ke';
                break;
            case 4:
                dayOfWeek = 'To';
                break;
            case 5:
                dayOfWeek = 'Pe';
                break;
            case 6:
                dayOfWeek = 'La';
                break;
            case 0:
                dayOfWeek = 'Su';
                break;
            default:
                $log.log("Weekday not resolved! Date value: ", d);
        }
        return dayOfWeek;
    }
    
    function getFirstDayOfMonth(mm, yyyy) {
        var d = new Date(yyyy, mm, 1)
        return d.getDay();
    }

    return {
        daysInMonth : function(mm, yyyy) {
            return getNmbrOfDays(mm, yyyy);
        },
        weekDay : function(dd, mm, yyyy) {
            return getDayOfWeek(dd, mm, yyyy);
        },
        firstDay: function(mm, yyyy) {
            return getFirstDayOfMonth(mm, yyyy);
        }
    }
});
