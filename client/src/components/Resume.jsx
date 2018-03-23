import Section from './core/Section';

const skillType = {
  administration: 'infra',
  agile: 'skill',
  angular: 'frame',
  apache: 'infra',
  'api-gateway': 'infra',
  bootstrap: 'frame',
  'continuous deployment': 'skill',
  'continuous integration': 'skill',
  css: 'lang',
  elastic: 'infra',
  express: 'frame',
  groovy: 'lang',
  hibernate: 'frame',
  html: 'lang',
  illustration: 'skill',
  java: 'lang',
  javascript: 'lang',
  jdk: 'frame',
  kanban: 'skill',
  lambda: 'infra',
  LAMP: 'infra',
  linux: 'infra',
  macOS: 'infra',
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
  swing: 'frame',
  'travis-ci': 'infra',
  typescript: 'lang',
  ubuntu: 'infra',
  webpack: 'infra',
  windows: 'infra',
  wordpress: 'frame',
};
const typeColour = {
  'skill': 'secondary',
  'infra': 'warning',
  'lang': 'info',
  'frame': 'success',
};
function badgify(skill) {
  if( !skillType[skill] ) {
    console.log(`${skill} not in skillType`);
  }

  const skillColour = skillType[skill];
  return <a key={skill} href='#' className={`badge badge-pill  badge-${typeColour[skillColour]}`}>{skill}</a>;
}


export default class Resume extends React.Component {
  render() {
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
        'mobile',
        'react',
        'redux',
        'typescript',
        'lambda',
        'webpack',
        'continuous integration',
        'continuous deployment',
        'travis-ci',
        'express',
        'node',
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
        'responsive',
        'mobile',
        'angular',
        'javascript',
        'rest',
        'api-gateway',
        'elastic',
        'groovy',
        'node',
        'npm',
        'agile',
        'linux',
        'java',
        'jdk',
        'bootstrap',
        'hibernate',
        'express',
        'html',
        'css',
      ]
    }, {
      title: 'System Analyst / Full Stack Developer',
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
        'macOS',
        'redhat',
        'LAMP',
        'administration',
        'javascript',
        'python',
        'linux',
        'php',
        'java',
        'jdk',
        'swing',
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

    return <Section name='' isLight={true}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 style={{
              textTransform: 'capitalize',
            }}>James Loucks <small>Fullstack developer</small></h1>
            <h3 style={{
              textTransform: 'capitalize',
            }}>Professional History</h3>
            {jobs.map( job => {
              return <div key={job.where} className='card'>
                <div className='card-body' style={{
                  color: 'black',
                }}>
                  <h4 className='card-title' style={{
                    textTransform: 'capitalize',
                  }}>
                    {job.title}
                  </h4>
                  <h5 className='card-subtitle' style={{
                    textTransform: 'capitalize',
                  }}>
                    {job.where}
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
                    {job.tools.map( skill => badgify(skill))}
                  </p>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>;
    </Section>
  }
}
