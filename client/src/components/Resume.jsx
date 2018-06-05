import Section from './core/Section';

const skillType = {
  administration: 'infra',
  agile: 'skill',
  angular: 'frame',
  apache: 'infra',
  'api-gateway': 'infra',
  aws: 'infra',
  bash: 'lang',
  bootstrap: 'frame',
  clang: 'skill',
  'continuous deployment': 'skill',
  'continuous integration': 'skill',
  'c++': 'lang',
  'c#': 'lang',
  'c': 'lang',
  cg: 'lang',
  crontab: 'infra',
  css: 'lang',
  elastic: 'infra',
  express: 'frame',
  gnu: 'skill',
  groovy: 'lang',
  hibernate: 'frame',
  html: 'lang',
  illustration: 'skill',
  java: 'lang',
  javascript: 'lang',
  jvm: 'frame',
  kanban: 'skill',
  lambda: 'infra',
  LAMP: 'infra',
  linux: 'infra',
  lua: 'lang',
  macOS: 'infra',
  maya: 'skill',
  microservices: 'skill',
  mobile: 'infra',
  mssql: 'frame',
  mysql: 'frame',
  node: 'frame',
  npm: 'infra',
  photoshop: 'skill',
  php: 'lang',
  python: 'lang',
  react: 'frame',
  redhat: 'infra',
  redux: 'frame',
  responsive: 'skill',
  rest: 'skill',
  scrum: 'skill',
  selinux: 'infra',
  swing: 'frame',
  tomcat: 'infra',
  'travis-ci': 'infra',
  typescript: 'lang',
  ubuntu: 'infra',
  webpack: 'infra',
  windows: 'infra',
  wordpress: 'frame',
  'visual studio': 'skill',
};
const typeColour = {
  'skill': 'secondary',
  'infra': 'secondary',
  'lang': 'info',
  'frame': 'success',
};
function badgify(skill) {
  if( !skillType[skill] ) {
    console.log(`${skill} not in skillType`);
  }

  const skillColour = skillType[skill];
  return <span key={skill} href='#' className={`badge badge-pill  badge-${typeColour[skillColour]}`}>{skill}</span>;
}


const jobs = [{
  title: 'Software Developer',
  where: 'Speedline Solutions',
  starting: 'May 2017',
  until: 'present',
  description: <div>
    <p>Small development team focused on launching a new platform for online-ordering that integrates with legacy in-store offering. Hired as experienced web developer for work on maintaining modern best-practices.</p>
    <ul>
      <li>Evangelising modern node js conventions that can apply to project</li>
      <li>Design and implement features for the online ordering system</li>
      <li>Collaborate with team leads for interface and architectural design</li>
      <li>Technical resource for Node, React, and web 2.0</li>
    </ul>
  </div>,
  tools: [
    'aws',
    'mobile',
    'react',
    'redux',
    'typescript',
    'lambda',
    'webpack',
    'continuous integration',
    'microservices',
    // 'continuous deployment', *sigh* not yet!
    'travis-ci',
    'express',
    'node',
    'python',
    'npm',
    'kanban',
    'windows',
    'bootstrap',
    'html',
    'css',
  ]
}, {
  title: 'Software Developer',
  where: 'Boats Group',
  starting: 'Feb 2016',
  until: 'May 2017',
  description: <div>
    <p>International company dealing with millions of users, providing global portals for posting boat sales. They have diverse technology stacks, but a flat heirarchy.</p>
    <ul>
      <li>Part of a global team that agile method to give weekly deliverables</li>
      <li>Designing and implementing highly-scalable next generation of internal APIs on NodeJs and Grails on top of MySQL and ElasticSearch and queues</li>
      <li>Lead several presentations to modernise and simplify the codebases</li>
      <li>Improved the onboarding process and guided new developers</li>
      <li>Technical lead for a top priority project
        <ul>
          <li>Responsible for design</li>
          <li>Timeline estimation</li>
          <li>Architectural decisions, after collaborating with several domain experts to learn the existing systems and dependencies</li>
          <li>Communicated with the external client at the C-level</li>
          <li>Carried it to completion on schedule</li>
        </ul>
      </li>
    </ul>
  </div>,
  tools: [
    'aws',
    'responsive',
    'mobile',
    'javascript',
    'rest',
    'api-gateway',
    'elastic',
    'groovy',
    'microservices',
    'node',
    'npm',
    'agile',
    'linux',
    'java',
    'jvm',
    'bootstrap',
    'hibernate',
    'express',
    'html',
    'css',
  ]
}, {
  title: 'System Analyst / Fullstack Developer',
  where: 'French School Board',
  starting: 'November 2010',
  until: 'February 2016',
  description: <div>
    <p>A small, diverse team focused on delivering all of the technical services and applications built specifically for francophone teachers in BC. We built fit-for-purpose applications to administer tests and track scores, custom integrations with larger software suites, and maintained learning software with updates and custom plugins.</p>
    <ul>
      <li>Design, implement, deploy, and maintain web applications</li>
      <li>Administer systems and provide security patching</li>
      <li>Manage cron jobs, and clone test-systems</li>
      <li>Lead training seminars for software we've rolled out into our organisation</li>
      <li>Wear many hats, filling any needs of the team; graphic design, audio recording, etc.</li>
      <li>Outside of assigned tasks
        <ul>
          <li>Encouraged adoption of newer programming conventions</li>
          <li>Designing RESTful APIs</li>
          <li>Use of modern web standards</li>
        </ul>
      </li>
    </ul>
    <p>All work was in French.</p>
  </div>,
  tools: [
    'clang',
    'gnu',
    'macOS',
    'redhat',
    'LAMP',
    'administration',
    'javascript',
    'python',
    'linux',
    'php',
    'java',
    'jvm',
    'swing',
    'tomcat',
    'apache',
    'mssql',
    'mysql',
    'html',
    'css',
  ]
}, {
  title: 'Web Consultant ​&​ Visual Artist',
  isVolunteer: true,
  where: 'Red on Black Music',
  starting: 'Oct 2014',
  until: 'Oct 2015',
  description: <p>
    Reacting quickly to short deadlines and changing requirements; develop changes to the website (plug-in administration, graphics, etc.) using a Kanban-style todo list.
  </p>,
  tools: [
    'wordpress',
    'photoshop',
    'css',
    'php',
    'kanban',
    'illustration',
  ]
}];

const educations = [{
  where: 'Red Hat Certification',
  what: 'System Administrator II Certificate',
  when: 'May 2012',
  description: <div>
    <p>
      From RedHat: "An IT professional who has earned the Red Hat Certified System Administrator (RHCSA®) is able to perform the core system administration skills required in Red Hat Enterprise Linux environments."
    </p>
    <ul>
      <li>Complete knowledge of the Linux command-line environments</li>
      <li>Deploy, configure, and maintain systems</li>
      <li>Manage securiy, including firewall and SELinux</li>
    </ul>
  </div>,
  tools: [
    'bash',
    'redhat',
    'selinux',
    'linux',
    'crontab'
  ],
}, {
  where: 'Art Institute of Vancouver',
  what: 'Visual and Game Programming Diploma',
  when: 'September 2010',
  description: <div>
    <p>
      Completion of the final project necessitated the command of modern programming paradigms, in-depth knowledge of asset pipelines and game engines (both Unreal and Unity).
    </p>
    <ul>
      <li>Team-based projects, SCM, Scrum, and Agile teams</li>
      <li>Implented design patterns and algorithms, such as search, and A*</li>
      <li>Acquired deep understanding of C++, C#, cg, and Python</li>
      <li>Memory management techniques, pointer arithmetic</li>
      <li>Networking in real-time with UDP and TCP/IP</li>
      <li>Focus on 3d math; implemented and used quaternion, matrix, and vector operations</li>
      <li>Designed and implemented shaders for custom engine, and exporters for Maya</li>
    </ul>
  </div>,
  tools: [
    'c++',
    'c',
    'c#',
    'cg',
    'lua',
    'python',
    'javascript',
    'maya',
    'windows',
    'visual studio',
    'scrum',
  ],
}, {
  where: 'Port Moody Secondary School',
  what: 'IB Certificate',
  when: 'June 2007',
  description: <div>
    Excellence in Computer Science award, and attended the SFU problem solving competition, implementing solutions in Java.
  </div>,
  tools: [
    'java',
    'c++',
  ],
}];


const getAllSkills = function() {
  const skills = [];

  jobs.map(job => job.tools).concat( educations.map( e => e.tools ))
    // add all the skills together in each thing, now we have an array of arrays of tools
    .reduce( (acc, cur) => (acc.concat(cur)), [])
    .sort()
    .forEach( skill => {
      if( skills.indexOf(skill) === -1 ) {
        skills.push(skill);
      }
    });

  console.log(skills);

  return skills;
}

const getTechnicalSkills = function(skills) {
  const langs = [];
  getAllSkills().forEach( skill => {
    if( skillType[skill] === 'lang' || skillType[skill] === 'frame') {
      langs.push(skill);
    }
  })
  return langs;
}



export default class Resume extends React.Component {
  renderSkills() {
    return <div style={{
      textTransform: 'capitalize',
    }}>
      {getTechnicalSkills().join(', ')}
    </div>

    return null;
  }

  renderEducation(education) {
    return <div key={education.where}>
      <table className='card card-wrapper'><tr><td style={{
        width: '100%',
      }}>
        <div className='card-body' style={{
          color: 'black',
        }}>
          <h4 className='card-title'>
            {education.what}
          </h4>
          <h5 className='card-subtitle'>
            {education.where}
            <span style={{
              float:'right',
            }}>{education.when}</span>
          </h5>
          <div className='card-text' style={{
            margin: '1em',
          }}>
            { education.description }
          </div>
          <p>
            {education.tools.sort().map( skill => badgify(skill))}
          </p>
        </div>
      </td></tr></table>
    </div>;
  }

  renderJob(job) {
    return <div key={job.where}>
      <table className='card card-wrapper'><tr><td>
        <div className='card-body' style={{
          color: 'black',
        }}>
          <h4 className='card-title'>
            {job.title}
          </h4>
          <h5 className='card-subtitle'>
            {job.where}
            {job.isVolunteer ? ' (Volunteer)' : ''}
            <span style={{
              float:'right',
            }}>{job.starting} - {job.until}</span>
          </h5>
          <div className='card-text' style={{
            margin: '1em',
          }}>
            { job.description }
          </div>
          <p>
            {job.tools.sort().map( skill => badgify(skill))}
          </p>
        </div>
      </td></tr></table>
    </div>;
  }

  render() {
    return <Section name='' isLight={true} style={{
      padding: 0,
    }}>
      <div className='container'>
        <div className='row' style={{
          paddingTop: '2em',
          paddingBottom: '2em',
        }}>
          <div className='col'>
            <h1>James Loucks<br/><small>Fullstack developer</small></h1>
          </div>
          <div className='col text-right'>
            <h5>Vancouver, Canada</h5>
            <h5>
              {/*<a href='http://www.jamescodes.ca' target='_blank'>jamescodes.ca</a>*/}
              778-888-1496
            </h5>
            <h5>
              <a href='mailto:james.loucks.codes@gmail.com'>james.loucks.codes@gmail.com</a>
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            With a diverse history of 7+ years of experience, from serverless applications to dev-ops, and a background in 3D rendering. Proven technical leader; delivered project plans, managed timelines, and mentored new employees. Deep knowledge of security from the bare-metal to the application level, and of modern web frameworks.
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>Technical Summary</h2>
            {this.renderSkills()}
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>Professional History</h2>
            {jobs.map(this.renderJob)}
          </div>
        </div>
        <div className='row' style={{
          pageBreakBefore: 'always',
          breakBefore: 'page',
        }}>
          <div className='col'>
            <h2>Education</h2>
            {educations.map(this.renderEducation)}
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <small>References available upon request</small>
          </div>
        </div>
      </div>
    </Section>
  }
}
