/**
 * Created by xiaopang on 2016/12/12.
 */
const joinPath=require('path').join
const publicPath=joinPath(__dirname,'../public')
const sendFile=require('../utils/send').sendFile
module.exports=function(req,res){
  console.log('params:'+req.params)
  var path=req.params[1]
  console.log(path)
  path=joinPath(publicPath,path)
  sendFile(path,res)
}