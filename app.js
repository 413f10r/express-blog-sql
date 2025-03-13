const express = require("express")
const app = express()
const port = 3000


app.get("/api/posts", (req, res) => {
    res.send("hello world")
})
app.listen(port, () => {
    console.log(`la mia porta http://localhost:${port}/api/posts`)
})