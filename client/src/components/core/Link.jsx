
export default (props) => {
  const target = props.isExternal ? '_blank' : 'self'

  return <a target={target} href={props.href}>
    {props.children}
  </a>
};
