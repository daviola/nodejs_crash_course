const http = require('http');

// Create server object
http;http.createServer((req, res) => {
    // Write response
    res.write('<p>Hello World<p>')
    res.end();
}).listen(5000, () => console.log('Server Running...'));