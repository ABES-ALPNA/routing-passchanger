const server = require("http");

server.createServer((req, res) => {
    if (req.url === '/') {
        res.write("this is my first page");
        res.end("");
    } else if (req.url === '/contact') {
        res.write("this is my contact page");
        res.end("");
    } else if (req.url === '/about') {
        res.write("this is my about page");
        res.end("");
    } else {
        res.write("page not found");
        res.end("");
    }
}).listen(4000, () => {
    console.log("started");
});