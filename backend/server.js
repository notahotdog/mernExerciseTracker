const express = require('express'); //include express and cors
const cors = require('cors');
const mongoose = require('mongoose'); //connect to mongodb 

require('dotenv').config(); //have envt var in the dotenv files

//how to create express server
const app = express();
const port = process.env.PORT || 5000; //port the server will be on

//middleware
app.use(cors());
app.use(express.json()); //allows us to parse json - server will extend and receive json

/*To check which port is being listened
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
*/


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true} //takes in the uri address from .env
); 
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//Require and add the files
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);//directs users to this thing if they use this url 
app.use('/users', usersRouter);





//what starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});