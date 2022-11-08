const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const {router} = require('./Routes/FavRoutes');
const app = express();
// const dbUri = 'mongodb://localhost:27017/CryptoUserDB';
const dbUri = 'mongodb+srv://mongoadmin:kjG9RtvrrgNWx49E@contact-cluster.ntxhw.mongodb.net/CryptoUserDB';

app.use(cors({
    origin: true,
    credentials: true,
}));

mongoose.connect(dbUri);
mongoose.connection.once('open', (err)=>{
    if(!err){
        console.log('connected to database');
    }
    else{
        console.log(err);
    }
})


app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/api/v1', router);


const port = process.env.PORT || 9001;

app.listen(port, ()=>{
    console.log("server is running on port 9001");
})