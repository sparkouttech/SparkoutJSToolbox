const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
  let query = req.query;
  if(query.keyword == '' || !query.keyword || query.keyword == 'hi'){
    return res.json({status:400});
  }
  res.json({
    message:'hi',
    status:200,
  })
})

app.post('/add',(req,res)=>{
  let body = req.body;
  res.json({
    status:200,
    message:body.message
  })
})

app.listen(3000,(err)=>{
  if(err) console.log(err)
  else console.log('server on port 3000')
})

module.exports = app;