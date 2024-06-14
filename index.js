const exp = require("express");
const app = exp()
const port = 6969
const routes = require('./Routers/Router')

app.use('/', routes)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})