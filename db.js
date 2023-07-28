const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const connectToMongo = () => {
  mongoose.connect(process.env.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('Connected to the database ')
  })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    })
}
module.exports = connectToMongo;