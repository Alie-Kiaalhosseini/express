const express = require('express');
const server = express();
const PORT = 4001;

server.get('/multiply',(req, res)=>{
    const {value1, value2} = req.query;
    res.send(`<h3>Multiplying  ${value1} by  ${value2} becomes ${Number(value1)*Number(value2)}`);
})
server.listen(PORT,()=> console.log(`server running on port ${PORT}`));
//http://localhost:4001/multiply?value1=5&value2=6