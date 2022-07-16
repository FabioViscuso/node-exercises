const { createServer } = require('node:http')

function serverApp() {
    return createServer((req, res) => {
        console.log("request received");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ location: 'Mars', message: 'Hello from another planet!' }));
    })
}

module.exports = serverApp;
