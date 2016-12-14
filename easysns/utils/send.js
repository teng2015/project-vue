/**
 * Created by xiaopang on 2016/12/13.
 */
const fs=require('fs')
const mime=require('mime')
const joinPath=require('path').join

exports.sendFile=function(path,res){
  fs.readFile(path,function(err,data){
    if(err){
       if(err.code==='ENOENT'){
         res.writeHead(404)
         res.end('not Fount')
       }else {
         res.writeHead(500)
         res.end(err.message)
       }
    }else{
      var mimeType=mime.lookup(path)
      var charset=mime.charsets.lookup(mimeType)
      res.setHeader('Content-Type',mimeType+(charset ? '; charset='+charset:''))
      res.end(data);
    }
  })
}

exports.redirect=function(location,res,statusCode){
  statusCode=statusCode || 302
  res.writeHead(statusCode,{
    location: location
  })
}