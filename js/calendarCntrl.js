app.controller('calendarCntrl', function ($scope, $http) {

    $scope.eventSources = [];
    $scope.event = [];
    $scope.selectedEvent = null;
    $scope.isFirstTime = true;
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var currentView = "month";
    $scope.events = [

        {
            title: 'Long Event',
            start: new Date('Wed May 31 2017 10:00:00 GMT+0530 (IST)'),
            end: new Date('Thu June 1 2017 17:00:00 GMT+0530 (IST)')
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: new Date('Wed May 31 2017 09:00:00 GMT+0530 (IST)'),
            allDay: false
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false
        },
        {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            // url: 'http://google.com/'
        },
        {
            title: 'Click for Google',
            start: new Date(y, m, 28),


        }

    ];
    $scope.eventSources = [$scope.events];

    $scope.uiConfig = {
        calendar: {
            height: 400,
            editable: true,
            header: {
                left: 'month basicWeek basicDay agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            eventClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    };
});