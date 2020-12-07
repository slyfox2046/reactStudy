const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/users');
app.use(bodyParser.json());
app.use('/api/users', users);
app.listen(3030, (req, res) => {
  console.log('服务器运行在3030端口上！');
});
