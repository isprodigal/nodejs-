//express实例化
const express = require('express')
const app = express()
//POST请求  express不能直接解析消息体  需要安装插件body-parser   https://www.npmjs.com/package/body-parser
//npm install body-parser 安装解析插件
const bodyParser=require('body-parser')
//app.use 使用插件   application/x-www-form-urlencoded  解析表单数据
app.use(bodyParser.urlencoded({ extended: false }))
//解析json数据 
app.use(bodyParser.json())
//简单的get请求方式
app.get('/user', (req, res) => {
    console.log(req.query)  //get获取传输过来的参数在req.query中
    let { us, ps } = req.query
    //数据处理    res.send返回数据
    if (us == 123 && ps == 123) { res.send({ erro: '200', msg: '请求成功' }) }
    else { res.send({ erro: '401', msg: '请求失败' }) }
})
//POST请求
app.post('/user/login', (req, res) => {
    console.log(req.body)  //POST请求获取传输过来的参数在req.body中
    let { us, ps } = req.body
    //数据处理    res.send返回数据
    if (us == 123 && ps == 123) { res.send({ erro: '200', msg: '请求成功' }) }
    else { res.send({ erro: '401', msg: '请求失败' }) }
})
app.listen(3000, () => console.log('http://localhost:3000'))