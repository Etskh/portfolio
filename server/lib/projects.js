'use-strict';

const projects = [{
    name: "Card Creator",
    description: "A WYSIWYG board-game or collectible card designer written with Django, LESS, and Bootstrap. It's deployed with TravisCI, and then to Heroku.",
    image: '/card-creator.png',
    url: "http://card-creator.herokuapp.com",
    repo: 'https://www.github.com/etskh/card-creator',
    languages: ['python3', 'html5', 'javascript', 'less', 'django templates'],
    apis: ['jQuery', 'bootstrap', 'django', 'gulp', 'npm'],
    infrastructure: ['travisCI', 'Heroku'],
}, {
    name: "Visual Character",
    description: "Dungeons and Dragons character manager, dealing with equipment, statistics, and status effects. It tries to rethink the idea of a character sheet, opting to do as many calculations as it can for the player.",
    image: '/visual-character.png',
    repo: '',
    repo: 'https://www.github.com/etskh/visual-character',
    languages: ['html5', 'javascript', 'less', 'nunjucks templates'],
    apis: ['jQuery', 'bootstrap', 'node', 'express', 'gulp', 'npm'],
    infrastructure: ['travisCI', 'Heroku'],
}, {
    name: "jamescodes.ca",
    description: "This site itself is a work of my own hand. Simply a node application with some JSON in the backend",
    image: '',
    repo: 'https://www.github.com/etskh/portfolio',
    languages: ['html5', 'javascript', 'less', 'nunjucks templates'],
    apis: ['jQuery', 'bootstrap', 'node', 'express', 'gulp', 'npm'],
    infrastructure: ['EC2', 'AWS'],
}];


module.exports.getAll = () => {
    return Promise.resolve(projects);
}
