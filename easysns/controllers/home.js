/**
 * Created by xiaopang on 2016/12/12.
 */
const sendFile=require('../utils/send').sendFile
const joinPath=require('path').join
const viewPath=joinPath(__dirname,'../views')
//const joinPath=require('path').join
//const viewPath=joinPath(__dirname,'../views')
module.exports=function(req,res){
   var isLogin=false
   var view=isLogin?'home.html':'welcome.html'
   var path=joinPath(viewPath,view)
   sendFile(path,res)
}