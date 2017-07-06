var app = angular.module('myapp',['ngRoute','ui.calendar']); 

app.config(function ($routeProvider, $locationProvider) {

   $routeProvider
    //   .when('/hghgh',{
    //       templateUrl:'partials/home.html',
    //       controller:'homeCntrl'

    //   })
    //   .when('/',{
    //       templateUrl:'partials/login.html',
    //       controller:'loginCntrl'
    //   })
        .when('/', {
            template:"<h1>Home</h1>"    
        })
        .when('/techcrunch',{
            templateUrl:'partials/news.html',
            controller:'news'
        })
        .when('/newsweek',{
            templateUrl:'partials/news.html',
            controller:'news'

        })
        .when('/the-next-web',{
            templateUrl:'partials/news.html',
            controller:'news'
        })
        .when('/break',{
            templateUrl:'partials/news.html',
            controller:'news'

        })
        .when('/calendar',{
            templateUrl:'partials/calendar.html',
            controller:'calendarCntrl'
        })
       
});

