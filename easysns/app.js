/**
 * Created by xiaopang on 2016/12/12.
 */
var http=require('http')
var parseUrl=require('url').parse
var controllers=require('./controllers')

const rules=[
  {path:'/',controller:controllers.home},
  {path:'/user',controller:controllers.user},
  {path:/^\/static(\/.*)/,controller:controllers.static},
  {path:'/auth/login',controller:controllers.auth.login,method:'post'},
  {path:'/auth/register',controller:controllers.auth.register,method:'post'}

]

function find(arr,match){
  for(var i=0;i<arr.length;i++){
    if(match(arr[i])){
      return arr[i];
    }
  }
}

function notFound(req,res){
  res.end('404')
}
var server=http.createServer(function(req,res){
  var urlInfo=parseUrl(req.url)
  var rule=find(rules,function(rule){
   if(rule.method){
     console.log(req.method);
      if(rule.method.toLowerCase()!=req.method.toLowerCase()){
        console.log('aaa');
        return false
      }
   }
   if(rule.path instanceof RegExp){
         var matchResult = urlInfo.pathname.match(rule.path)
     if(matchResult){
        req.params=matchResult
     }
     return matchResult
   }
   return rule.path==urlInfo.pathname;
  });

  var controller=rule && rule.controller || notFound;
  console.log(controller);
  controller(req,res);
})

server.listen('3000')

console.log('server is running:3000')