const express = require('express');
const app = express();
app.use(express.static('dist'))
app.listen(3000,'0.0.0.0',()=>console.log('listening at http://127.0.0.1:3000/'))