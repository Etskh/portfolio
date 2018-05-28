import Section from '../core/Section';
import Icon from '../core/Icon';
import Link from '../core/Link';

import * as Gravatar from '../../lib/gravatar';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gravatar: null,
    };
  }

  componentDidMount() {
    Gravatar.getProfile().then( gravatar => {
      this.setState({
        gravatar,
      });
    });
  }

  render() {
    const gravatar = this.state.gravatar;
    return <Section name="about" isLight={this.props.isLight}>
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            { gravatar && gravatar.thumbnailUrl ?
              <img src={gravatar.thumbnailUrl} alt="Professional mug shot" className="rounded-circle mx-auto"/>
              :
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>}
          </div>
          <div className="col-6">{gravatar ? gravatar.aboutMe : ''}</div>
        </div>
        <div className="row my-5 text-center">
          <div className="col">
            <Link href="https://www.linkedin.com/in/james-loucks-0a133315" isExternal={true}>
              <Icon size={3} colour='inherit' icon='linkedin'/>
              <p>LinkedIn</p>
            </Link>
          </div>
          <div className="col">
            <Link href="https://github.com/Etskh" isExternal={true}>
              <Icon size={3} colour='inherit' icon='github'/>
              <p>Github</p>
            </Link>
          </div>
          <div className="col">
            <Link href="/resume" isExternal={true}>
              <Icon size={3} colour='inherit' icon='book'/>
              <p>CV</p>
            </Link>
          </div>
        </div>
      </div>
    </Section>;
  }
}
