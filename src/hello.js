const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello, World! x2, just for testing");
});  

app.listen(8080, function () {
    console.log("erver is running on port 3000");
});
