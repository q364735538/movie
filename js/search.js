angular.module("$movieApp.searchCtrl",[]).controller("$searchCtrl",["$scope","$movieServ","$routeParams",function(e,a,t){e.searchName=t.searchName,t.pageid=t.pageid||1,e.movie={},e.isloading=!1,e.pageid=t.pageid;var i=5*(t.pageid-1),o=document.querySelectorAll(".paging>a");a.jsonp("https://api.douban.com/v2/movie/search",{count:5,q:e.searchName,start:i},function(a){if(e.movie=a,e.prevPage=t.pageid-0-1,1==t.pageid){t.pageid=1;for(var i=0;i<2;i++)o[i].setAttribute("onclick","return false")}if(e.nextPage=t.pageid-0+1,e.pageCount=Math.ceil(a.total/5),e.total=a.total,t.pageid==e.pageCount){t.pageid=e.pageCount;for(var i=2;i<3;i++)o[i].setAttribute("onclick","return false")}e.isloading=!0,e.$apply()})}]);