
export default (props) => {
  const size = props.size || 1;
  const colour = props.colour || '#FFF';
  return <i className={[
      'fa',
      'fa-' + props.icon,
      'fa-' + size.toString() + 'x',
    ].join(' ')}
    style={{
      color: colour,
    }}
    aria-hidden="true">
  </i>
};
