const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()
const PORT = 3000
app.set('view engine','hbs')


const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname,'../frontend/views')
const partialsDir = path.join(__dirname,'../frontend/partials')

app.use(express.static(publicDir))
app.set('views',viewsDir)
hbs.registerPartials(partialsDir)

 const cus = [
    {
        "name":'omnia',
        "balance":3000
    },
    {
        "name":'yasser',
        "balance":4000
    },
    {
        "name":'ahmed',
        "balance":1000
    },
    {
        "name":'aya',
        "balance":5000
    },
    {
        "name":'ali',
        "balance":300
    },
    {
        "name":'ali',
        "balance":300
    },
    {
        "name":'ali',
        "balance":300
    },
    {
        "name":'ali',
        "balance":300
    }
    
]
// const cus =[]
app.get('',(req,res)=>{
    res.render('home',{
        pageName:'Home Page',
        name:'Omnia'
    })
})
app.get('/allCus',(req,res)=>{
    res.render('allCus',{
        pageName:'All Customers',
        cus : cus
    })
})
app.get('/allCus/:id',(req,res)=>{
    const id = req.params.id
    res.render('singleCus',{
        pageName:'Single Customer',
        customer: cus[id]
    })
})
app.get('/addCus',(req,res)=>{
    // customer = ''
    if(req.query.name && req.query.balance){
        customer={
            name:req.query.name,
            balance:req.query.balance
        }
        cus.push(customer)
        res.redirect('/allCus')
    }
    
    res.render('addCus',{
        pageName:'Add New Customer'
    })
})
app.get('/daleteCus',(req,res)=>{
    // const id = req.params.id
    // delete customer[id]
    res.render('deleteCus',{
        pageName:'Delete Customer'
    })
})
// app.delete('/allCus/:id');
app.get('*',(req,res)=>{
    res.render('404',{
        pageName:'404 Error'
    })
})
app.listen(PORT)