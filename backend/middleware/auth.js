const jwt = require('jsonwebtoken');
const {UserModel} = require("../models/userModel")



const Auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
   
  if (!token) return res.status(401).json({ message: 'Not authorized, token missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports ={Auth};
