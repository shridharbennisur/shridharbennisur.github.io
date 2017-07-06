app.controller('loginCntrl',function($scope){
    var name = 'shri';
    var pass = '1234';
   
    $scope.login = function() {

    
   if(name === $scope.name && pass === $scope.pass) {
       window.location="partials/home.html";
   } else {
       $scope.wait = true;
       $scope.error = "give correct values";
   }
    };

});