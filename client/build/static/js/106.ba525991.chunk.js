(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[106],{87:function(e,n,r){"use strict";r.r(n),r.d(n,"tryUserLogin",(function(){return t}));var a=r(53),t=function(e,n){var r=new FormData;r.append("username",e),r.append("password",n),r.append("grant_type","password");var t=new a.Deferred;return a.ajax({url:"/api/userLogin/",type:"POST",contentType:!1,data:r,cache:!1,processData:!1}).done((function(e){t.resolve(e)})).fail((function(e,n,r){t.reject(e)})),t.promise()}}}]);
//# sourceMappingURL=106.ba525991.chunk.js.map