import Section from './core/Section';


export default class Header extends React.Component {
  render() {
    return <Section name="top" hideTitle={true}>
      <div className="jumbotron">
        <h1 className="display-3">James Codes</h1>
        <p className="lead">James makes code, for work, for fun.</p>
      </div>
    </Section>;
  }
}
