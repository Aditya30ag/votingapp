// const connectToMongo=require('./db');
const express = require('express');
var cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

// connectToMongo();
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/voteapp";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express()
const port = process.env.PORT || 5000;

const _dirname=path.resolve();

app.use(express.json());
app.use(cors());

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