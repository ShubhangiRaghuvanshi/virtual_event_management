const jwt=require('jsonwebtoken');
const authenticateToken=(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1];
    console.log('Authorization header:', req.headers.authorization);
    if (!token) return res.status(401).json({ message: 'Access denied' });
    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{

        if (err) return res.status(403).json({ message: 'Invalid token' });
      


        else 
        {
req.user=user;
console.log('Decoded token payload:', req.user);
next();
        }
    })

} 
module.exports = { authenticateToken };