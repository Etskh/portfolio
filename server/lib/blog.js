'use strict';

const fs = require('fs');
const markdown = require('markdown').markdown;


const blogPosts = {
    'jaya-cms': {
        title: 'Jaya-CMS',
        date: new Date(2016, 1),
    },
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

module.exports.getAll = () => {
    const blogs = [];
    for (let name in blogPosts) {
        blogs.push(getBlogPost(name, blogPosts[name]));
    }
    return Promise.all(blogs);
};
