'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer')
const fs = require('fs');

// require and use "multer"...
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse',upload.single('upfile'), (req,res) => {
  res.send(req.file)
  
  const originalname=req.file.originalname
  const size=req.file.size
  if(req.file) {
    res.json({name,size})
  }
  

})
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
