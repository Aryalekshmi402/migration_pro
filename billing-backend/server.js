const http = require('http');
const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 3001;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUrls = require('./routes/addUser');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("Database connected"))

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});