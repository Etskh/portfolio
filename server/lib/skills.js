'use-strict';


const skills = {
    javascript: 'Specialising in bleeding edge Ecma6, specifically with Nodejs. I am very capable on the client side, knowing jQuery very well.',
    php: '',
    shell: '',
    linux: '',
    java: '',
    groovy: '',
    'c++': 'Second to Javascript, I have intermediate knowledge of C-based languages, their quirks and more advanced features - keeping up to date with current C++ standards (x14, right now - soon x17)',
    //html: 'Modern HTML5 standards',
    //css: '',
    sql: '',
    python: '',
    jquery: '',
    cg: '',
    'c#': '',
};


// TO LOWER
const skill_order = [
    'javascript',
    //'jquery',
    //'linux',
    'sql',
    //'css',
    //'nodejs',
    'php',
    'shell',
    'python',
    'java',
    //'html',
    //'express',
    //'macos',
    //'agile',
    //'mssql',
    //'bootstrap',
    //'aws',
    'c++',
    'c#',
    //'wordpress',
    //'drupal',
    //'hibernate',
    //'hapi',
    //'grails',
    'groovy',
    //'django',
    //'elasticsearch',
    'cg',
];



module.exports.getAll = () => {
    const skillList = [];
    for (var skill in skills) {

        if( skill_order.indexOf(skill.toLowerCase()) === -1) {
            continue;
        }

        const level = (skill_order.length - skill_order.indexOf(skill.toLowerCase())) / skill_order.length;

        // add the skil to the list
        skillList.push({
            name: skill,
            description: skills[skill],
            level: level,
        });
    }
    return Promise.resolve(skillList);
};
