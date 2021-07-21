const router = require('express').Router()

require('dotenv').config()


// Routes
router.get('/ping', function (req, res) {
    return res.send('pong');
});

module.exports = router;