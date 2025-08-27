const server = require("http");

server.createServer((req,res)=>{
    res.write("this is my first service");
    res.end("")
}).listen(4000,()=>{
    console.log("started");
})