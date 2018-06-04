const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = rquire('cors');

const config = require('./config');

const app = express();

mongoose.connect(config.database, (err) => {
    if (err) {
        console.log(err);  
    } else {
        console.log('success connect');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev'));
app.use(cors);

app.get('/', (req, res, next) => {
    res.json({
    user: 'dang.nh'
});
});

app.listen(config.port, er => {
    console.log('Error at 3030 port');
});
