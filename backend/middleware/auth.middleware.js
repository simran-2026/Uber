const userModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || '';
        const token = req.cookies?.token || (authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null);

        if (!token) return res.status(401).json({ message: 'Unauthorized' });

      
        const isBlacklisted = await BlacklistToken.findOne({ token });
        if (isBlacklisted) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        req.user = user;
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};