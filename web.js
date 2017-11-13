var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('SCM Lab Assignment 1 & 2 <br> Group 6 <br> Lim Jing Jie CB15170');
});

app.listen(process.env.PORT || 3000);
