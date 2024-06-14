const mongoose = require("mongoose");

async function connect(){
    try{
    await mongoose.connect(
        "mongodb+srv://ademomarc:ODOO15marc@cluster0.krhflee.mongodb.net/test",{useNewUrlParser:true}
    );
    }catch(err){
        console.error("Error connecting to mongodb");
        console.error(err);
    }
}

module.exports = { connect };