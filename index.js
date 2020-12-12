// we collect environment variables
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5050;

// we create an express app
const express = require('express');
const app = express();

// we set settings
app.set('view engine', 'ejs');
app.set('views', 'app/views');
// static files
app.use(express.static('public'));

// we settup router 
const router = require('./app/router');
app.use(router);

// we start the app
app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
