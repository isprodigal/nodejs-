//连接数据库
const  mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/admin',{ useNewUrlParser: true });
//连接数据库
var db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('连接成功')
})
//scheme 对象

//创建一个和集合相关的schema 对象  类似表头
// var Scheme=mongoose.Schema;
//获取schema对象
var userSchema = new mongoose.Schema({
    us : {type:String,required:true},
    ps : {type:String,required:true},
    age : Number,
    sex : {type:Number,default:0}
})
//将schema 对象转化为数据模型
var User = mongoose.model('user',userSchema)  //该数据对象和集合管理('集合名',schema对象)
//操作数据库