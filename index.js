const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const routes = require('./routes/postRoute');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello World! from dinesh..');
});