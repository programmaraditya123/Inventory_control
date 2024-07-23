const mongoose  = require('mongoose');
 
 

const ComponentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Part:{
        type:String,
        required:true,
    },
    DateReceived:{
        type:Date,
        required:true,
    },
    Receivednumber:{
        type:Number,
        required:true,
    },
    DateDispatched:{
        type:Date,
        required:true,
    },
    Dispatchednumber:{
        type:Number,
        required:true,
    },
    BalanceItem:{
        type:Number,
        required:true,
    },
    uniqueQR:{
        data:Buffer,
        contentType:String, 
    },
},{timestamps:true});


module.exports = mongoose.model('Components',ComponentSchema)