const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.createConnection('mongodb://localhost/movieclub', {useNewUrlParser:true})



app.listen(3000, () => console.log('Server Started'))
