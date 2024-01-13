var express = require('express');
var router = express.Router();
const User = require('./users');

/* GET home page. */
// to create a user
// router.get('/create', async function(req, res, next) {
//   const createUser =await User.create({
//     name:"Pratik",
//     age:23
//   })
//   res.send(createUser)
// });

// to find the All users
router.get("/allusers", async(req,res)=>{
  let Allusers = await User.find()
  res.send(Allusers)
})

// to find only one user
router.get("/findoneusers", async(req,res)=>{
  let Allusers = await User.findOne({name:"Pratik"})
  res.send(Allusers)
})

// to delet the user
router.get("/delete", async(req,res)=>{
  let delusers = await User.findOneAndDelete({name:"Pratik"})
  res.send(delusers)
})

// ex of using the session

router.get("/",(req,res)=>{
  req.session.username="Pratik"  // req.session.{username} you can set the session variable name in place of username 
})
router.get("/checksession",(req,res)=>{
  console.log(req.session) // you can acces the session in any rout of the server unless the server get restart
  const checkUserName = req.session.username;
  if(checkUserName === "Pratik")
  {
    res.send("you can access this page")
  }else{
    res.send("you do not have the permossion to access this page")
  }
})

router.get("/deleteSession", (req,res)=>{
  req.session.destroy()   // to delete the session inside the server without restartin the srever we can use this method
})

// create
// req.session.koibhiname=koibhivalue
// read
// req.session.koibhiname
// delete
// req.session.destroy


// to set the cookie
router.get("/setcookie", (req,res)=>{
 // res.cookie(name,value)  to send the cookie data  to client as the cookie is set on frontend or browser
 res.cookies(age,23)
})


// to read the cookie
router.get("/readcookie", (req,res)=>{
  // res.cookie(name,value)  to send the cookie data  to client as the cookie is set on frontend or browser
  console.log(req.cookies.age)
 })

 // to delete the cookie
 router.get("/deletecookie", (req,res)=>{
  // res.cookie(name,value)  to send the cookie data  to client as the cookie is set on frontend or browser
 // res.clearCookie("name")
   console.log(res.clearCookie("age")) //it will send the responce to client to delete the cookie
 })

module.exports = router;
