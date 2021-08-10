const router = require('express').Router()
const checkAuthentication = require("../auth/is_authenticated")

require('dotenv').config()


// Routes
router.get('/ping', function (req, res) {
    return res.send('pong');
});

router.get('/twitter', checkAuthentication, function (req, res) {
    var data = {
        followers: 50,
    }
    var data =[data.followers]
    return res.status(200).json(data);
});

router.get('/discord', checkAuthentication, function (req, res) {
    var data = {
        discordusers: 520,
    }
    var data =[data.discordusers]
    return res.status(200).json(data);
});
router.get('/telegram', checkAuthentication, function (req, res) {
    var data = {
        telegramusers: 100,
    }
    var data =[data.telegramusers]
    return res.status(200).json(data);
});
module.exports = router;