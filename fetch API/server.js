const express = require('express');
const app = express();
app.get('/', (req, res) => {
    // 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('hello fetch');

});
app.listen('3000', () => {
    console.log('服务已启动');
})