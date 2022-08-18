const mongoose = require('mongoose');

const connecDatabase = (url)=>{

    mongoose.connect(url,{useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true}).then(() => {
        console.log('CONNECTED TO DATABSE');
    });
}

module.exports = connecDatabase;