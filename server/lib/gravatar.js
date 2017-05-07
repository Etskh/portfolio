'use strict';

const md5 = require('md5');


module.exports.getProfile  = (email) => {

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
    /*
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
    */
};
