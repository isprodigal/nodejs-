//express实例化
const express = require('express')
const app = express()
//node路由
let userRouter=require('./router/userRouter')
app.use('/user',userRouter)
app.listen(3000, () => console.log('http://localhost:3000'))