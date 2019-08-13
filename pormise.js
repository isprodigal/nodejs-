
function delfile(){
    return new Promise((reslove,reject)=>{
        //异步操作
        // reslove('成功') //外部走then的处理函数  表示成功
        reject('失败')  //外部走catch的处理函数   表示失败
    })
}
delfile()
.then((msg)=>{
    console.log('then:'+msg)
})
.catch((err)=>{
    console.log('err:'+err)
})