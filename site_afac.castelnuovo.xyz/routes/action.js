const express = require('express');
const router = express.Router({ mergeParams: true });
const { sendEmail } = require('../utils/email');
const { generateLink } = require('../utils/jwt');

router.post('/', (req, res, next) => {
    const { email, frameNumber } = req.body;
    const action = req.params.action;

    // TODO: validate inputs
    // email (email), frameNumber (int), action (subscribe or unsubscribe)

    const link = generateLink(action, email, frameNumber);
    sendEmail(action, email, link);

    res.json({ success: true });
});

module.exports = router;
