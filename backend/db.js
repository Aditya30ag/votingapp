/*const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/voteapp"

const connectToMongo=async()=>{
    await mongoose.connect(mongoURI);
    await console.log("success") 
}
module.exports=connectToMongo;*/

const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://adityaagrwal3005:<#1234aditya#>@votingapp.ttsj0.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch((err) => console.error('MongoDB connection error:', err));
