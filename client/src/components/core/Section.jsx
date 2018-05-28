
export default (props) => {
  const style = props.style || {};

  if( props.isLight ) {
    style.backgroundColor = 'white';
    style.color = 'black';
  }

  if( !props.name ) {
    console.warn('Section doesnt have name property!');
  }

  return <div id={props.name} style={style} className={props.isLight ? 'section-light' : 'section-dark'}>
    {props.hideTitle ? null : <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>{props.name}</h1>
        </div>
      </div>
    </div>}
    {props.children}
  </div>
};
