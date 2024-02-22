
const User  = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { hashedPassword,comparePassword } = require('../helper/auth');
const generateToken = require('../helper/generateToken');



//REGISTER

module.exports.signup = async (req, res) => {
    const {
        name,
        email,
        password,
        phone} = req.body;
  if(!name || !email || !password || !phone) {
    res.status(400).json('Please fill all fields..')
  }
  try {
    const hashedPass = await hashedPassword(password)
    const user = await User.create({
      name,
      email,
      password:hashedPass,
      phone
    });
    
    if(user){
      generateToken(res,user._id)
      res.status(200).json({
        _id : user._id,
        name : user.name,
        phone : user.phone,
        email : user.email
      })
    }else{
      res.status(400).json('Invalid data')
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}


// LOGIN
module.exports.login = async (req, res) =>{
  const {email,password} = req.body;
  const user = await User.findOne({email})
  if(user && (await user.matchPassword(password))){
    generateToken(res,user._id);
    res.status(201).json({
      _id : user._id,
      name : user.name,
      phone : user.phone,
      email : user.email
    })
  }else{
    res.status(400).json('Invalid data')
  }
}


module.exports.getSingleUser = async (req, res) =>{ 
   try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user);
   } catch (error) {
    res.status(404).json({ message: error.message })

   }

}

// Logout 
module.exports.logout = (req, res) =>{    
    res.cookie('jwttoken','', {
        httpOnly : true,
        expires : new Date(0)
    });
    res.status(200).json({message:'User logout'})
}