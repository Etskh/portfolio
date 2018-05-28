
export default class Navigation extends React.Component {
  render() {
    let evenSection = true;
    return <div>
      {this.props.sections.map( section => {
        evenSection = !evenSection;
        return React.createElement(section.component, {
          isLight: evenSection,
          key: section.name,
        }, null);
      })}
      {this.props.children}
      <nav
        id="navigation"
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          background: 'rgba(0,0,0,0.8)',
          borderRadius: '0 0 0 20px',
        }}
        className="nav">
        {this.props.sections.map( section => {
          if ( !section.icon ) {
            return null;
          }
          return <div key={section.name}>
            <a className="nav-link" href={`#${section.name}`}>
              <i className={`on-active fa fa-2x fa-${section.iconActive}`}
                aria-hidden="true"></i>
              <i className={`on-inactive fa fa-2x fa-${section.icon}`}
                aria-hidden="true"></i>
            </a>
          </div>;
        })}
      </nav>
    </div>;
  }
}
