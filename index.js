const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('TEST GITHUB DEPLOY');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
