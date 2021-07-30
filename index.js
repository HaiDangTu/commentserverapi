const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('TEST GITHUB DEPLOY 3<br>');
    res.send('Second string');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
