const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const useRouter = require('./controlar/userRouter')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//cors is middleware
app.use(cors())

app.get('/', useRouter)

app.listen(8000)