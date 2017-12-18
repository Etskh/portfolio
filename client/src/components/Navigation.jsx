
export default class Navigation extends React.Component {
  render() {
    const links = {
      '#skills': 'star',
      '#about': 'user-circle',
      '#projects': 'heart',
      '#contact': 'comment',
    };
    return <nav
      id="navigation"
      style={{
        position: 'fixed',
        height: 75,
        right: 0,
        top: 0,
        background: '#FFF',
        borderRadius: '0 0 0 20px',
      }}
      className="nav">
      {Object.keys(links).map( link => {
        const iconName = links[link];
        return <div key={link}>
          <a className="nav-link" href={link}>
            <i className={"on-active fa fa-4x fa-" + iconName} aria-hidden="true"></i>
            <i className={"on-inactive fa fa-4x fa-" + iconName + '-o'} aria-hidden="true"></i>
          </a>
        </div>;
      })}
    </nav>
  }
}
