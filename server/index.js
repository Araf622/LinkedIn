// import connect from './database/db.js';
// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser';
//import router from './routes/route.js'

const connect = require('./database/db.js')
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const app = express();
const Router = require('./routes/route.js')
const usersRouter = require('./routes/users.js')
const postsRouter = require('./routes/posts.js')


const port = process.env.PORT;
dotenv.config()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Router)

// app.post('/signIn', (req, res) => {
//     console.log("request receiveed")
//     const name = req.body.username
//     const password =req.body.password
//     console.log('username : ', name )
//     res.send('Hello, World!');
// });


app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const uri = process.env.DB_URI
connect(uri)