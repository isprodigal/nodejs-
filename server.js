//express实例化
const express = require('express')
const app = express()
let userRouter=require('./router/userRouter')
app.use('/user',userRouter)
app.listen(3000, () => console.log('http://localhost:3000'))