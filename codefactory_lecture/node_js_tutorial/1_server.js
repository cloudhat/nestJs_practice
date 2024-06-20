const http = require('http');
const url = require('url');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page!</h1');
    }else if(path == '/post'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Post Page!</h1');
    }

});


server.listen(port, host, () => {
    console.log('server running');
})

