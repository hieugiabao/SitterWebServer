const express = require('express');
const index = express();
const route = require('./routes');

const cors = require('cors')

index.use(cors()) // Use this after the variable declaration
index.use(express.urlencoded({extended: true}));
index.use(express.json());
route(index);


index.listen(3000);