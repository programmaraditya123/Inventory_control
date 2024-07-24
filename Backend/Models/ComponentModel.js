const mongoose  = require('mongoose');
 
 

const ComponentSchema = new mongoose.Schema({
    name:{
        type:String,
         
    },
    Part:{
        type:String,
         
    },
    DateReceived:{
        type:Date,
         
    },
    Receivednumber:{
        type:Number,
         
    },
    DateDispatched:{
        type:Date,
        
    },
    Dispatchednumber:{
        type:Number,
        
    },
    BalanceItem:{
        type:Number,
         
    },
    uniqueQR:{
        data:Buffer,
        contentType:String, 
    },
},{timestamps:true});


module.exports = mongoose.model('Components',ComponentSchema)