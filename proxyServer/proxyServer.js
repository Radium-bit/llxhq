const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/proxy', (req, res) => {
  const targetUrl = req.query.url;
  const options = {
    url: targetUrl,
    headers: {
      //Origin和Referer填写原始下载地址的官网
      'Origin': 'https://example.com', 
      'Referer': 'https://example.com'
    }
  };
  req.pipe(request(options)).pipe(res);
});

app.listen(3000, () => {
  console.log('CORS Proxy server is running on port 3000');
});
