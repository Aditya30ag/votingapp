// const connectToMongo=require('./db');
const express = require('express');
var cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

// connectToMongo();
const mongoURI = 'mongodb+srv://adityaagrwal3005:%231234aditya%23@votingapp.ttsj0.mongodb.net/?retryWrites=true&w=majority&appName=votingapp'
mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express()
const port = process.env.PORT || 5000;

const _dirname=path.resolve();

app.use(express.json());

const corsoption={
  origin:["http://localhost:5000","https://votingapp-zcwd.onrender.com"],
  credentials:true
}
app.use(cors(corsoption));

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/admin', require('./routes/admin'))

app.use(express.static(path.join(_dirname,'/my-app/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname,'my-app','dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})