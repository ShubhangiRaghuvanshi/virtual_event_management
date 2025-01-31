const jwt=require('jsonwebtoken');

    const authenticateAdmin = (req, res, next) => {
        console.log('Admin middleware invoked'); 
        if (req.user && req.user.role === 'admin') {
            console.log('User is admin'); 
            return next();
        }
        res.status(403).json({ message: 'Access Forbidden: Admins Only' });
    };
    
    module.exports = { authenticateAdmin };
    
   
