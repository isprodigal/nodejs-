//express实例化
const express = require('express')
const app = express()
//全局中间件 做全局拦截器
app.use('/',(req,res,next)=>{
    let{toke}=req.query
    if(toke){
        next() //next()是否继续执行
    }else{
        res.send('toke不存在')
    }
})
app.get('/text1', (req, res) => {
    console.log(req.query)  //get获取传输过来的参数在req.query中
    // let { toke } = req.query
    //数据处理    res.send返回数据
    // if (toke) {
    //     res.send({ erro: '200', msg: '请求成功' })
    // } else {
    //     res.send({ erro: '401', msg: '请求失败' })
    // }
    res.send({ erro: '200', msg: '请求成功' })
})
app.get('/text2', (req, res) => {
    console.log(req.query)  //get获取传输过来的参数在req.query中
    // let { toke } = req.query
    // //数据处理    res.send返回数据
    // if (toke) {
    //     res.send({ erro: '200', msg: '请求成功' })
    // } else {
    //     res.send({ erro: '401', msg: '请求失败' })
    // }
    res.send({ erro: '200', msg: '请求成功' })
})

app.listen(3000, () => console.log('http://localhost:3000'))