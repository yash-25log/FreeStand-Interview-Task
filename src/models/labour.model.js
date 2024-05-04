const mongoose = require('mongoose')
const labourSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        skill: {
            type: String,   
            required: true
        },
        aadhaar:{
            type: Number,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^[0-9]{12}$/.test(v.toString());
                },
                message: props => `${props.value} is not a valid Aadhaar number! Must be 12 digits long.`
            }
    
        },
        location:{
            x:{
                type: Number,
                required: true
            },
            y:{
                type: Number,
                required: true
            }   
        },
    },
    {timestamps:true}
    
)

const labour_db = mongoose.model('labour_db', labourSchema);
module.exports = labour_db