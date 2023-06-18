const express = require('express')
import userController from './controllers/user.js'
import bodyParser from 'body-parser'
const app = express()
const PORT = 3000

app.use(bodyParser.json())


app.use('/user', userController)

app.listen(PORT, ()=>{
    console.log(`App online na porta ${PORT}`)

})