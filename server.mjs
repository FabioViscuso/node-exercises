import { createServer } from "node:http";
import clc from "cli-color"

const server = createServer((req, res) => {
    console.log("request received");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1>Scemo chi legge</h1></body></html>');
})

server.listen(8080, () => { console.log(clc.bgGreenBright('server started at http://localhost:8080')) })
