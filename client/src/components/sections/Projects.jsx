import Section from '../core/Section';

const projects = [{
  name: 'Beeralyzer',
  img: '/beeralyzer.jpg',
  description: 'I like fitness, but more than fitness, I like craft beer. Naturally, I made a small app to calculate and save the carloric approximation of beers.',
  uses: {
    langs: 'jsx',
    infra: 'expo, react-native, react',
  },
}, {
  name: 'Visual Character',
  img: '/visual-character.jpg',
  description: 'A project under development for some time. A platform agnostic character manager for mobile devices, focusing on giving the player options during combat and helping with character creation and choices.',
  uses: {
    langs: 'es6, less, jsx',
    infra: 'graphql, ec2, travis, react',
  },
}, {
  name: 'Card Creator',
  img: 'https://s3-us-west-2.amazonaws.com/james-loucks-portfolio-bucket/card-creator.jpg',
  description: 'A card generator for board games, prototypes, or card games. Gives a WYSIWYG interface for modifying the design, and table-entry for entering the data for each. It uses templates to put the data into the card.',
  uses: {
    langs: 'python, javascript, less',
    infra: 'heroku, sqlite, travis',
  },
  links: {
    source: 'https://www.github.com/Etskh/card-creator',
  },
}, {
  name: 'This Site',
  img: '/this-site.jpg',
  description: 'This site was whipped together for the purpose of showcasing my competencies with React, node, express. Also a great place to put any one-off ideas',
  uses: {
    langs: 'es5, jsx, less',
    infra: 'ec2, travis, react',
  },
  links: {
    source: 'https://www.github.com/Etskh/portfolio',
    live: 'http://www.jamescodes.ca',
  },
}];


export default class Projects extends React.Component {

  renderProjectTags(tags) {
    let tagNumber = 0;
    // tags: {
    //   langs: 'javascript, jsx, ...',
    //   infra: 'ec2, heroku, travis',
    // }
    const tagTypes = {
      langs: 'success',
      infra: 'info',
    };
    const finalTags = [];
    Object.keys(tags).forEach( type => {
      tags[type].split(',').map( tech => {
        finalTags.push({
          name: tech,
          type: type,
        });
      });
    });
    return finalTags.map( tag => {
      return <span
        key={++tagNumber}
        className={`badge badge-pill badge-${tagTypes[tag.type]}`}>
        {tag.name}
      </span>;
    });
  }

  render() {
    return <Section name="projects" isLight={this.props.isLight}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                {projects.map( (project, index) => {
                  return <li key={project.name} data-target="#carouselExampleIndicators" data-slide-to={index} className={index===0?'active':''}></li>
                })}
              </ol>
              <div className="carousel-inner">
                {projects.map( (project, index) => {
                  return (<div key={project.name} className={`carousel-item ${index===0?'active':''}`}>
                    <div style={{
                      width: '100%',
                      height: '30em',
                      opacity: 0.5,
                      backgroundImage: `url(${project.img})`,
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                    }}>&nbsp;</div>
                    <div className="carousel-caption" style={{
                      background: 'rgba(0,0,0,0.5)',
                      boxShadow: '0px 0px 20px 20px rgba(0,0,0,0.5)',
                    }}>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <p>{this.renderProjectTags(project.uses)}</p>
                    </div>
                  </div>);
                })}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>;
  }
}
