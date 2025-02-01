const express = require("express")
const app = express()
const port = 80

app.use(express.static('content'))

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})