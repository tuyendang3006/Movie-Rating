/* This module will hold our connection to 
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
   const mongoose = require('mongoose')

   /* Connnect to our database */
   // Get the URI of the local database, or the one specified on deployment.
   const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/movie'
   //const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://tuyen12345:tuyen_12345@cluster0-hiey4.mongodb.net/Movie?retryWrites=true&w=majority'
   
   mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}); 
   
   module.exports = { mongoose }  // Export the active connection.
