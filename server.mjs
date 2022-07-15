import { createServer } from "node:http";
import clc from "cli-color"

const server = createServer((req, res) => {
    console.log("request received");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ location: 'Mars', message: 'Hello from another planet!' }));
})

server.listen(8080, () => { console.log(clc.bgGreenBright('server started at http://localhost:8080')) })
