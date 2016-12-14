/**
 * Created by xiaopang on 2016/12/13.
 */
//module.exports=function(stream,callback){
//  var buffers=[]
//  stream.on('data',function(data){
//    buffers.push(data)
//  });
//
//  stream.on('end',function(){
//    callback(null,Buffer.concat(buffers).toString('utf-8'))
//  })
//
//  stream.on('error',function(err){
//    callback(err)
//  })
//}

module.exports=function(stream,callback){
  var buffers=[];
  stream.on('data',function(data){
    buffers.push(data);
  })

  stream.on('end',function(){
    callback(null,Buffer.concat(buffers).toString('utf8'))
  })

  stream.on('error',function(err){
    callback(err)
  })
}