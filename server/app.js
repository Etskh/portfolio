
const path = require('path');
const express = require('express');
const hbs = require('express-hbs');

// Local modules
const logger = require('./lib/logger');
const pkg = require('../package');

// Create the app
const app = express();

// Set up static assets
app.use(express.static('public'));

// Set up templating engine
app.engine('html', hbs.express4());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// App configuration
const config = {
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  port: process.env.PORT || 3000,
  development: process.env.NODE_ENV === 'development',
};

// Add logging to each route
app.use((req, res, next) => {
  logger.info({
    request: req.originalUrl,
    resolve: req.path,
    origin: req.ip === '::1' ? 'localhost' : req.ip,
  });
  next();
});

// Main route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'jamescodes.ca | James Loucks, Fullstack Developer',
    description: 'James can code things. He is very good at it.',
  });
});

app.get('/beeralyzer', (req, res) => {
  res.render('index', {
    title: 'Beeralyzer',
    description: 'Computes approximate calories for a night of beer drinking so you feel the right amount of bad afterwards.',
  });
});


app.get('/resume', (req, res) => {
  res.render('index', {
    title: 'James Loucks | Cirriculum Vitae',
    description: 'Software developer',
  });
});

app.get('/valentines', (req, res) => {
  res.render('valentines', {
    // empty
  });
});

// Listen on configured port
app.listen(config.port, () => {
  logger.info([config.name, 'version', config.version, 'running on port', config.port].join(' '));
});
