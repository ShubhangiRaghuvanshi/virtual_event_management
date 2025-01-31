const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require ('dotenv' ).config();
const { createUser, getUserByEmail } = require('../models/users');
const registerUser=async (req,res)=>{
    const {username,email,password,role}=req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (getUserByEmail(email)) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword= await bcrypt.hash(password,10);
    const newUser=createUser(username,email,hashedPassword,role);
    res.status(200).json({ message: 'User registered successfully', newUser });

}

   
    
    const loginUser = async (req, res) => {
      const { email, password } = req.body;
    
      // Find the user by email
      const user = getUserByEmail(email);
      console.log(user);
    
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    
      // Compare the entered password with the stored hash
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    
      // If credentials are valid, generate a token
      const token = jwt.sign(
        { id: user.id, role: user.role ,email:user.email}, 
        process.env.SECRET_KEY, 
        { expiresIn: '1h' }
      );
    
      // Respond with the token
      return res.status(200).json({
        message: 'User logged in successfully',
        token,
      });
    };

    
module.exports={registerUser,loginUser}