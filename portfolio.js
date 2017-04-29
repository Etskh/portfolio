const fs = require('fs');
const express = require('express');
const nunjucks = require('nunjucks');
const compression = require('compression')
const bunyan = require('bunyan');
const request = require('request');
const md5 = require('md5');
const markdown = require("markdown").markdown;


const package = require('./package');


const projects = require('./server/lib/projects');
const skills = require('./server/lib/skills');




// Initialise the application
const app = express();

const config = {
    name: 'portfolio',
    default_port: 3000,
};
config.port = process.env.PORT || config.default_port;



const blogPosts = {
    'jaya-cms': {
        title: 'Jaya-CMS',
        date: new Date(2016, 1),
    },
};



app.use(express.static('public'));
app.use(compression());

nunjucks.configure('server/templates', {
    autoescape: true,
    express: app,
});


const log = bunyan.createLogger({
    name: config.name
});



const getGravatar = (email) => {

    return Promise.resolve({
        name: {
            formatted: 'James Loucks',
            first: 'James',
            last: 'Loucks',
        },
        aboutMe: 'Natural leader. Generalist developer. Certified system administrator. JavaScript/ECMA6 specialist. Games, comics, and music enthusiast.',
        currentLocation: 'Vancouver, Canada',
        thumbnailUrl: 'http://1.gravatar.com/avatar/b4c46e3f9c03cc84920d8fd34fd1174b',
    });

    return new Promise((resolve, reject) => {
        const gravatarRoot = 'https://www.gravatar.com/';
        const userAgent = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
        const requestOptions = {
            url: gravatarRoot + md5(email) + '.json',
            headers: {
                'User-Agent': userAgent,
            }
        };
        request.get(requestOptions, function(error, response, body) {
            if (error) {
                return reject('Can not load gravatar');
            }

            const data = JSON.parse(body);
            if (data.entry.length < 1) {
                return reject('No profiles returned');
            }

            return resolve(data.entry[0]);
        });
    });
};


const getBlogPost = (name, info) => {
    return new Promise((resolve, reject) => {

        const blogPath = './server/blog/' + name + '.md';
        fs.readFile(blogPath, (err, data ) => {
            if( err ) {
                return reject(err);
            }

            return resolve({
                title: info.title,
                content: markdown.toHTML(data.toString()),
                date_posted: info.date,
                last_modified: info.date,
            });
        });
    });
};
const getBlogPosts = () => {
    const blogs = [];
    for (let name in blogPosts) {
        blogs.push(getBlogPost(name, blogPosts[name]));
    }
    return Promise.all(blogs);
};




app.all('/', function(req, res, next) {
    log.info(`Requesting page ${req.url}`);
    next();
});
app.get('/', function(req, res) {

    const email = 'etskh@hotmail.com';

    Promise.all([
        getBlogPosts(),
        getGravatar(email),
        skills.getAll(),
        projects.getAll(),
    ]).then(results => {

        res.render('test.html', {
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
    log.info(`Starting app on port ${config.port}`);
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
