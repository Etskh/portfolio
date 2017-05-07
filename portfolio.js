const fs = require('fs');
const express = require('express');
const nunjucks = require('nunjucks');
const compression = require('compression');


const package = require('./package');


const projects = require('./server/lib/projects');
const blog = require('./server/lib/blog');
const skills = require('./server/lib/skills');
const gravatar = require('./server/lib/gravatar');
const logger = require('./server/lib/logger');



// Initialise the application
const app = express();

const config = {
    name: 'portfolio',
    default_port: 3000,
};
config.port = process.env.PORT || config.default_port;


app.use(express.static('public'));
app.use(compression());

nunjucks.configure('server/templates', {
    autoescape: true,
    express: app,
});




app.all('/', function(req, res, next) {
    logger.info(`Requesting page ${req.url}`);
    next();
});
app.get('/', function(req, res) {

    const email = 'etskh@hotmail.com';

    Promise.all([
        blog.getAll(),
        gravatar.getProfile(email),
        skills.getAll(),
        projects.getAll(),
    ]).then(results => {

        res.render('portfolio.html', {
            projects: results[3],
            blog_posts: results[0],
            gravatar: results[1],
            skills: results[2],
            version: package.version,
        });
    }).catch(err => {
        res.render('error.html', {
            error: err,
        });
    });
});

app.listen(config.port, function() {
    logger.info(`Starting app on port ${config.port}`);
});

/*
Generally it's good to avoid text lines going full width of the page on web. Hard to read.

Projects section could have bigger titles and better images. Sometimes with web and interface designs portfolio images make more sense if you show them in a device or in a browser window - makes more sense to people visually. Otherwise the layout of the app kinda meshes with the layout of your site and it can look confusing.
I actually thought the titles and text below were part of the image on first glance and thought there was no title (though I'm looking at a small screenshot on my phone)
Also in projects, the buttons at the bottom could be bigger - view source and check it out

I'm not sure what the "Google sheets as data source" section is

I like the "coder" type font for headlines. I'd use it for your main "Fullstack generalist" one as well. More consistent.

Could prolly make your headings bigger too
Skills graph is also cooooool
Does any of that help?
*/
