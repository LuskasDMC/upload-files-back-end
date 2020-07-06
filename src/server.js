const express = require("express")
const morgan = require("morgan")
const path = require('path')
const routes = require("./routes")
const cors = require('cors')
require('./database/connect')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/files',express.static(path.resolve(__dirname,'..','tmp','uploads')))

app.use(routes)

app.listen(5000,() => console.log('Server running...'))