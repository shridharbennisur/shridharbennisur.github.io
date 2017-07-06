app.factory('restFactory',function($http){
    var obj = {};
    
    
    obj.getNews = function(path,loading) { 

       if (path === 'break') {
           console.log(path);
            var request = $http({
             method: "get",
             url: "https://api.breakingnews.com/api/v1/item/?format=json",
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded',
                 'Access-Control-Allow-Origin': 'http://localhost:9090',
                 'Accept' :'application/json'
             }
         });
          // return $http.get('https://api.breakingnews.com/api/v1/item/?format=json');
             return request;
       } else {
        var http1 = 'https://newsapi.org/v1/articles?source='; 
        var http2 = path;
        var http3  = '&apiKey=1bb3f168edce44c3b4bee3aa195e0700';
        var http = http1+http2+http3;
       
         return $http.get(http);
       }
    }; 

   

     return  obj;




});