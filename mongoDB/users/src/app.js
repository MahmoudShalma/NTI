const hbs = require('hbs')
const express = require('express')
const path = require('path')
//to call the function of my routes
const myMethods = require('./utils/functions')
const app = express()
const PORT = 7000

app.set('view engine', 'hbs')

const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname,'../template/views')
const layoutDir = path.join(__dirname,'../template/layouts')

app.use(express.static(publicDir))
app.set('views',viewsDir)
hbs.registerPartials(layoutDir)
//add user route
app.get('',(req,res)=>{
    //عشان اعرف اخد الداتا من المتصفح للملف عندي هنا و احوله للداتابيز
    if(req.query.name && req.query.phone){
        user ={
            name: req.query.name,
            email: req.query.email,
            phone: req.query.phone,
            msg: req.query.msg
        }
        // console.log(user)
        myMethods.addUser(user)
        return res.redirect('/showAll')
    }
    res.render('index')
})
//show all users
app.get('/showAll',(req,res)=>{
    myMethods.showAll((err,data)=>
    {res.render('allData',{data})})
    // res.render('')
})
//delete 
app.get('/deleteUser/:id',(req,res)=>{
    user = req.params.id
    myMethods.deleteUser(user)
    res.redirect('/showAll')
})
//show one
app.get('/showAll/:id',(req,res)=>{
    id = req.params.id
    myMethods.showOne(id,(err,data)=>{
        res.render('showOne',{data})
    })
})
app.listen(PORT)