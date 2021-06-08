const express = require("express")
const app = express()
const path = require("path")

const mongoose = require("mongoose")
const api = require('./server/routes/api')

mongoose.connect("mongodb://localhost/city")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

/*=====================================================
Start the server:
=======================================================*/
const port = 6000
app.listen(port, function() {
    console.log(`Server up and running on port ${port}`)
})
  
  