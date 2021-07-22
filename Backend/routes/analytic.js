const router = require('express').Router()

require('dotenv').config()


// Routes
router.get('/ping', function (req, res) {
    return res.send('pong');
});

router.get('/twitter', function (req, res) {
    return res.json({ followers: "twitter" });
});
module.exports = router;