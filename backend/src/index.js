import cors from "cors"
import express from "express"

const port = 8888

const app = express()
app.use(cors())
app.options("*", cors())

app.get("/", (req, res) => res.send({ status: true }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
