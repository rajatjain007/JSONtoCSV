const express = require('express')
const app = express()
const {Parser} = require("json2csv")
const jsonParser = require('body-parser').json()

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.get('/json2csvConverter',(req,res)=>{
    res.send("Welcome to JSON to CSV converter.\n Send an array of JSON to convert into CSV.")
    
})

app.post('/json2csvConverter',jsonParser,(req,res)=>{
    try{
        const parser = new Parser()
        const csv = parser.parse(req.body)
        res.attachment("output.csv")
        res.status(200).send(csv)
    }
    catch(err){
        console.error(err)
    }
})

app.listen(3000)