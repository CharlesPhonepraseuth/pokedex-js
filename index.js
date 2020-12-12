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

// we add session into our project
const session = require('express-session');
app.use(session({
  secret: 'a random string',
  saveUninitialized: true,
  resave: true
}));
// and we create a small middleware to make sure our 'team' list exist
app.use( (req, res, next) => {
  if(!req.session.team) {
    req.session.team = [];
  };
  next();
});

// we add urlencoded to treat POST
app.use(express.urlencoded({
  extended: true
}));

// we settup router 
const router = require('./app/router');
app.use(router);

// we start the app
app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
