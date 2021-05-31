const express = require('express');
require('./db/connectDB');
const app = express();

// Connect to port
const port = process.env.port || 3001;

app.listen(port, ()=> {
    console.log('listening', port);
});

// Converts incoming json as objects and we can access via req.body
app.use(express.json());
