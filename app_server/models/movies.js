const mongoose = require('mongoose');
const movieSchema = new
mongoose.Schema({
name: {type: String, required: true, min:3},
year: {
type: Date,
required: true
},
director:{
type:String,required:true
},
        hits:{
    type:Number,required:true
},
type:{
    type:String,required:false
}

});

mongoose.model('movie',movieSchema);