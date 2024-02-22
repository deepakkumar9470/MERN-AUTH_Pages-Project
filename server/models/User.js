const  mongoose = require ('mongoose');
const bcrypt = require("bcrypt")
const UserSchema = new mongoose.Schema({

    name: {
        type: String,

    },

    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: Number,
    }
},{timestamps: true})

UserSchema.methods.matchPassword =  async function(userPassword){
    return await bcrypt.compare(userPassword,this.password)
}

module.exports = mongoose.model('User', UserSchema)

