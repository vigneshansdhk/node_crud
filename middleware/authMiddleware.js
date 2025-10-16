const BlackListToken = require('../models/blackListToken');
const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Token is missing" });
        }

        const token = authHeader.split(' ')[1];

         // Check if token blacklisted
        const blacklisted = await BlackListToken.findOne({ where: { token } });
        if (blacklisted) {
            return res.status(401).json({ message: 'Token invalidated (logged out)' });
        }

        // Verify JWT
        const decoded = jwt.verify(token, "your_secret_key");
        req.user = decoded;
        
        next();

    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }


}