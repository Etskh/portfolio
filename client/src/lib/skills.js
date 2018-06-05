const skills = {
  javascript: 'Specialising in bleeding edge Ecma6, specifically with Nodejs. I am very capable on the client side, knowing jQuery very well.',
  PHP: 'LAMP stacks were my entry into the web world. PHP makes sense as a legacy framework that needs to be maintained, but I dont trust new projects deciding to use it.',
  shell: 'After becoming certified as a Red hat System Administrator, it solidified my understanding of the commandline.',
  linux: '',
  java: 'A necessary tool for enterprises who started their codebases in the early 2000s. I started with applet development, but professionally have worked on huge frameworks.',
  groovy: 'It seemed like a pythonic way to code Java, but I really like many of its small uses of the JVM and leveraging Java\'s enormous std lib',
  'C++': 'Second to Javascript, I have intermediate knowledge of C-based languages, their quirks and more advanced features - keeping up to date with current C++ standards',
  //html: 'Modern HTML5 standards',
  //css: '',
  SQL: 'Even though I\'ve worked with MSSQL databases with hundreds of tables to small Sqlite3 solutions, MySql remains a constant in my life.',
  python: 'I have known Python the third longest and feel easiest reading code. (Python 3 is far superior in design to 2.7!)',
  jquery: '',
  cg: 'Ive written several shaders, from basic lit shaders to soft skinned shaders.',
  'c#': 'Most applications were in Unity, a game engine, for one large project and several small games, but it was also used to make a level editor',
  react: 'In the past year, Ive been developing almost solely with react interfaces, and have become the SME/ambassador at my current company',
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
  'react',
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

export const getAll = () => {
  const skillList = [];
  let i = 0;
  for ( let skill in skills ) {

    if ( skill_order.indexOf( skill.toLowerCase() ) === -1 ) {
      continue;
    }

    const level = ( skill_order.length - skill_order.indexOf( skill.toLowerCase() ) ) / skill_order.length;

    // add the skil to the list
    skillList.push({
      name: skill,
      description: skills[skill],
      level: level,
      id: 'skill_' + (++i),
    });
  }
  return Promise.resolve( skillList );
};
