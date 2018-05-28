


export const View = (props) => {
  return <span></span>;
}

export const ResponsiveText = (mobileText, desktopText) => {
  return (<span>
    <span className="d-inline d-sm-none">{mobileText}</span>
    <span className="d-none d-sm-inline">{desktopText}</span>
  </span>);
}
