const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Our Application'
    })
})

app.listen(PORT, ()=> {
    console.log(`SERV