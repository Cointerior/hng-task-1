require("dotenv").config()
const cors = require("cors")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3500

app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "cointerior",
    backend: true,
    age: 18,
    bio: "I'm Ijaola Omoniyi, I'm a backend NodeJS developer"
  })
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})