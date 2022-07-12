const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('tiny'));
app.use(routes);


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT);
})

