const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
// Create Express app
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
const Router = require('./Routes/routes');
app.use('/', Router);

// Start the server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));
