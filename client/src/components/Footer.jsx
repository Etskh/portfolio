import Icon from './core/Icon';

const Footer = (props) => {
  return <div style={{
    background: '#111',
    color: '#AAA',
    textShadow: '#000 0px 0px 3px',
    minHeight: '4em',
    paddingTop: '2em',
    paddingBottom: '2em',
    fontSize: '80%',
  }}>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          This was created by James for self-aggrandizing purposes. It was built with react, nodejs, less, and sits on ec2 and aws.
        </div>
        <div className='col d-none d-md-block text-right'>
          <a href="http://www.jamescodes.ca">jamescodes.ca</a>
        </div>
      </div>
    </div>
  </div>;
};


export default Footer;
