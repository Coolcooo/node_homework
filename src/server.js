const path = require('path');
const express = require('express');
const mainRouter = require('./routers');

const app = express();
app.use('/files', express.static('../src'));

app.use('/', mainRouter);
app.listen(8080, () => {
    console.log('Server started on port 8080');
});

