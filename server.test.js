const supertest = require('supertest')
const serverApp = require('./server')

// create an instance of serverApp
const app = serverApp();

// pass the above instance into supertest
const testedApp = supertest(app)

//
test("GET /", async () => {
    const response = await testedApp.get("/")
        .expect(200)
        .expect('Content-Type', 'text/html')
    expect(response.text).toEqual('<html><body>Welcome to the World Wide Web!</body></html>')
})
