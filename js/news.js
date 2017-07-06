app.controller('news', function ($http, $scope, $location,restFactory,$timeout) {

    var path = $location.path();

    var newpath = path.substring(1,path.length);
      
 
     restFactory.getNews(newpath,$scope.loading).then(function(response){
        $scope.loading = true;
       
        $scope.news = response;
        $scope.loading = false;
        console.log($scope.news);
    });  

  
    
 





    // switch (path) {
    //     case "/techcrunch":
    //         $scope.loading = true;
    //         $http.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=1bb3f168edce44c3b4bee3aa195e0700")
    //             .then(function (response) {
    //                 $scope.news = response.data;
    //                 console.log($scope.news);
    //                 $scope.loading = false;
    //             });

    //         break;

    //     case "/newsweek":
    //         $scope.loading = true;
    //         $http.get("https://newsapi.org/v1/articles?source=newsweek&apiKey=1bb3f168edce44c3b4bee3aa195e0700")
    //             .then(function (response) {
    //                 $scope.news = response.data;
    //                 console.log($scope.news);
    //                 $scope.loading = false;
    //             });
    //             break;
    //       case '/the-next-web':
    //       $scope.loading = true;
    //         $http.get("https://newsapi.org/v1/articles?source=the-next-web&apiKey=1bb3f168edce44c3b4bee3aa195e0700")
    //             .then(function (response) {
    //                 $scope.news = response.data;
    //                 console.log($scope.news);
    //                 $scope.loading = false;
    //             });
    //              break;  
    //             default :
    //               $scope.loading = false;
    // }
   
});















//https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=1bb3f168edce44c3b4bee3aa195e0700
//https://newsapi.org/v1/articles?source=newsweek&apiKey=1bb3f168edce44c3b4bee3aa195e0700