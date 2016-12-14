/**
 * Created by xiaopang on 2016/12/13.
 */
const send=require('../utils/send')
const qs=require('querystring')
const parseBody=require('../utils/parseBody')

exports.login=function(req,res){
 parseBody(req,function(err,body) {
   send.redirect('/',res)
  })

  res.end('login')
}



exports.register=function(req,res){
 /*
 * stream.on('data')
 *   将data添加到buffers
 * stream.on('end')
 *   buffer=Buffer.concat(buffers) 拼接buffer
 *   buffer.toString('utf8')
 * */
  parseBody(req,function(err,body){
    var user={
      email:body.email,
      password:body.password,
      nickname:body.nickname
    }
    send.redirect('/',res)
  })

  res.end('register')
}