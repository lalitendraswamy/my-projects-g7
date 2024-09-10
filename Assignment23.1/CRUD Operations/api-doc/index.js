var fs = require('fs')
var path = require('path')
var http = require("http")

var server = http.createServer(function(req,res){
    let url = req.url
    var filePath = path.join(__dirname,`../Public/${url}`)
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            res.end("404 - Page Not Found")
        }else{
        res.end(data)
        }
    })
})

var port = 80

server.on("error",function(error){
    console.log('error')
})

server.listen(port,function(error){
        console.log('server is listening to http://3000/80')
    
})