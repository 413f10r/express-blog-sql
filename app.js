const express = require("express")
const app = express()
const port = process.env.SERVER_PORT
const connection = require("./data/db")
// const cors = require('cors') 

const postRouter = require('./routers/postRouter')

const errorsHandler = require("./middlewares/errorsHndler")
const notFound = require("./middlewares/notFound")

app.use(express.json())
app.use("/posts", postRouter)

app.use(notFound) // erorri nelle rotte 
app.use(errorsHandler) // i possibili errori dell'applicazione.



app.listen(port, () => {
    console.log(`La mia porta http://localhost:${port}/posts`)
})
