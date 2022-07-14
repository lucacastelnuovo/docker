const jwt = require('jsonwebtoken');

const generateLink = (action, email, frameNumber = '') => {
    const token = jwt.sign(
        { action, email, frameNumber },
        process.env.JWT_SECRET,
        {
            expiresIn: '24h',
        }
    );

    return `${process.env.URL}/verify/${token}`;
};

const validateToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return false;

        return payload;
    });
};

module.exports = { generateLink, validateToken };
