const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json(
    {test: '测试请求成功！'}
  );
});

app.listen(3001, () => {
  console.info('访问：http://localhost:3001/');
});
