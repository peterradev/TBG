const path = require('path');

const express = require('express');

const port = process.env.PORT || 3030;

const publicDir = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicDir));

// app.listen(3030, ()=>{
//     console.log('server running on port 3030');
// });

app.listen(port, ()=>{
    console.log('server running on port ${port}');
});

