const mongoose = require("mongoose")


const databaseConnection = (uri)=>{
    return mongoose.connect(uri)
}


module.exports = databaseConnection