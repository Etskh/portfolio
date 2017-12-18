
export default (props) => {
  const style = {
    paddingTop: 40,
    paddingBottom: 40,
    minHeight: 400,
  };
  if( props.isLight ) {
    style.backgroundColor = 'white';
    style.color = 'black';
  }

  if( !props.name ) {
    console.warn('Section doesnt have name property!');
  }

  return <div id={props.name} style={style} className={props.isLight ? 'section-light' : 'section-dark'}>
    {props.hideTitle ? null : <div className='container'>
      <div className="row">
        <h1>{props.name}</h1>
      </div>
    </div>}
    {props.children}
  </div>
};
