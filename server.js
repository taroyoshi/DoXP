const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello DoXP Node.js!');
});

app.listen(3000, () => {
    console.log("My app listening on port 3000!");
});