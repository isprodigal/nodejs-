//express实例化
const express = require('express')
const path=require('path')
const app = express()
console.log(__dirname)  //当前目录的路径
console.log(path.join(__dirname,'/assets'))  //拼接路径
app.use('/',express.static(path.join(__dirname,'/assets')))  //创建静态资源目录
//http://localhost:3000/banner.jpg就能直接访问到图片
app.listen(3000, () => console.log('http://localhost:3000'))