const { createServer } = require('node:http')

function serverApp() {
    return createServer((req, res) => {
        console.log("request received");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end('<html><body>Welcome to the World Wide Web!</body></html>');
    })
}

module.exports = serverApp;
