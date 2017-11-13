var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('SCM Lab Assignment\n Name:Lim Jing Jie');
});

app.listen(process.env.PORT || 3000);
