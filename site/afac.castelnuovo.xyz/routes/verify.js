const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateToken } = require('../utils/jwt');

const subscribe = (email, frameNumber) => {
    // TODO: create user in db
    // email
    // frameNumber
    // createdAt

    console.log('subscribe', email, frameNumber);
};

const unsubscribe = (email) => {
    // TODO: delete user

    console.log('unsubscribe', email);
};

router.get('/', (req, res, next) => {
    const token = req.params.token;
    const payload = validateToken(token);

    if (!payload) return res.sendStatus(403);
    if (payload.action === 'subscribe')
        subscribe(payload.email, payload.frameNumber);
    if (payload.action === 'unsubscribe') unsubscribe(payload.email);

    res.json({ success: true }); // TODO: nice response for user https://codeforgeek.com/render-html-file-expressjs/
});

module.exports = router;
