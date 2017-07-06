app.directive('header', function () {
    return {
        restrict: 'EA',
        templateUrl: 'partials/header.html',
        controller: function ($scope, $location) {
            $scope.isActive = function (path) {
                var currentPath = $location.path().split('/')[1];
                if (currentPath.indexOf('?') !== -1) {
                    currentPath = currentPath.split('?')[0];
                }
                return currentPath === path.split('/')[1];
            };
        },
    };
});


app.directive('loading', function () {
      return {
        restrict: 'EA',
        replace:true,
        template: '<p class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</p>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })