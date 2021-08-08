  
const express = require('express');
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const authRoute = require('./routes/auth');
const analyticRoute = require('./routes/analytic');
const meetingRoute = require('./routes/meetings')

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api', authRoute);
app.use('/api', analyticRoute);
app.use('/api', meetingRoute);


var HTTP_PORT = 5000
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});