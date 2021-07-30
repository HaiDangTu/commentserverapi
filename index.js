const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.write('TEST GITHUB DEPLOY 3');
    res.write('Second string::');
    res.end();
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
