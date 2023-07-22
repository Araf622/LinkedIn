// import mongoose from "mongoose"
const mongoose = require('mongoose')

const connect = async (uri) =>{
    // const uri = 'mongodb://localhost:27017/linkedin';
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("database connected successfully")
    }
    catch(err){
        console.log("error while connecting to database : ", err)
    }
}

module.exports = connect

// export default connect