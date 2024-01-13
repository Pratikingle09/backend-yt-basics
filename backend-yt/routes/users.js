const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/yt");

const userSchima = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:Number
})

module.exports= mongoose.model("User",userSchima);
