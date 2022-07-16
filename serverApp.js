const serverApp = require('./server')
const clc = require('cli-color')

const app = serverApp()

app.listen(
    8080,
    () => { console.log(clc.bgGreenBright('server started at http://localhost:8080')) }
)
