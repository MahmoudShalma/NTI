const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbServer = 'mongodb://127.0.0.1:27017'
const dbName = 'g5secondApp'
 MongoClient.connect(dbServer,{useNewUrlParser:true, useUnifiedTopology:true},(error,clinet)=>{
     if(error){
        return console.log('error in db server')
     }
     const db = clinet.db(dbName)
     db.collection('test2').insert(
         [
             {data1:'omnia'},
             {data2:'yasser'}
         ],
         (err,res)=>{
             if(err){
                 return console.log('error in inserting data')
             }
             console.log(res.ops)
         })
         
 })
