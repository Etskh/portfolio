import Section from './core/Section';
import Icon from './core/Icon';
import Link from './core/Link';

import * as Gravatar from '../lib/gravatar';

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
    return <Section name="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            { gravatar && gravatar.thumbnailUrl ?
              <img src={gravatar.thumbnailUrl} alt="Professional mug shot" className="rounded-circle mx-auto"/>
              :
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>}
          </div>
          <div className="col-6">{gravatar ? gravatar.aboutMe : ''}</div>
        </div>
      </div>
    </Section>;
  }
}
