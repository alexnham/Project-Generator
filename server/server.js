require('dotenv').config()

const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors')

app.use(cors());
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});

app.use('/GPT',routes);