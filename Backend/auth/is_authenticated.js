
const checkAuthentication = function checkAuthentication(req, res, next) {
	if (req.isAuthenticated()) {
	  next();
	} else
	  res.status(401).send({ Error: 'attempted unauthorized access' });
}

module.exports = checkAuthentication