/////functions of the routes=> هناديها في الراوتز
//add user inside the db
const addUser = (userData)=>{
    const {MongoClient, ObjectID} = require('mongodb')
    const dbServer = 'mongodb://127.0.0.1:27017'
    const dbName = 'usersData'
    MongoClient.connect(dbServer,{useNewUrlParser:true, useUnifiedTopology:true},(error, client)=>{
        if(error){
            return console.log('error in connection')
        }
        const db = client.db(dbName)
        db.collection('user').insertOne(userData,(error,response)=>{
            console.log(response)
        })
    })
}
//show all users
const showAll = (cb) =>{
    const {MongoClient, ObjectID} = require('mongodb')
    const dbServer = 'mongodb://127.0.0.1:27017'
    const dbName = 'usersData'
    MongoClient.connect(dbServer,{useNewUrlParser:true, useUnifiedTopology:true},(error, client)=>{
        if(error){
            return console.log('error in connection')
        }
        const db = client.db(dbName)
        db.collection('user').find().toArray((error,response)=>{
            if(error) cb('error',false)
            else cb(false,response)
        })
    })
}

        
        
//show one user by id
const showOne = (userId,cb)=>{
    const {MongoClient, ObjectID} = require('mongodb')
    const dbServer = 'mongodb://127.0.0.1:27017'
    const dbName = 'usersData'
    MongoClient.connect(dbServer,{useNewUrlParser:true, useUnifiedTopology:true},(error, client)=>{
        if(error){
            return console.log('error in connection')
        }
        const db = client.db(dbName)
        db.collection('user').findOne({_id:new ObjectID(userId)},(err,res)=>{
            if(err) cb('error',fales)
            else cb(false,res)
        })
    })
}
//delete user
const deleteUser = (userId, cb)=>{
    const {MongoClient, ObjectID} = require('mongodb')
    const dbServer = 'mongodb://127.0.0.1:27017'
    const dbName = 'usersData'
    MongoClient.connect(dbServer,{useNewUrlParser:true, useUnifiedTopology:true},(error, client)=>{
        if(error){
            return console.log('error in connection')
        }
        const db = client.db(dbName)
        db.collection('user').deleteOne({_id:new ObjectID(userId)})
        
    })
}

module.exports = {addUser,showAll,deleteUser, showOne}