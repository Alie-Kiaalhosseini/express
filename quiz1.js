const express = require('express');
const server = express();
const PORT = 4001;

server.get('/chocolate',(req, res)=>{
    const {amount} = req.query;
    res.send(`<h3> We have ${amount} chocolate!!</h3>`)
})

server.listen(PORT,()=> console.log(`server running up on PORT ${PORT}`));

//http://localhost:4001/choclate?amount=5