import Section from '../core/Section';
import Icon from '../core/Icon';
import Link from '../core/Link';

export default class Preamble extends React.Component {

  render() {
    return <Section name="" isLight={this.props.isLight}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-5">James codes stuff.</h1>
            <p>He has diverse history and set of experiences, from 3D-rendering, to dev-ops, to serverless applications. He'd describe himself as creative, intelligent, and a little weird.</p>
          </div>
        </div>
      </div>
    </Section>;
  }
}
