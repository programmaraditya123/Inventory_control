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
    status:{
        type:String,
        default:'Pending'
    },
    uniqueQR:{
        data:Buffer,
        contentType:String, 
    },
},{timestamps:true});


module.exports = mongoose.model('Components',ComponentSchema)