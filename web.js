var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('SCM Lab Assignment\n <br> Lim Jing Jie CB15170 <br> Wong Ying Shin CB15172 <br> Kho Kheng Eian CB15173 <br> Zahra Syahida CB15169 <br> ');
});

app.listen(process.env.PORT || 3000);
