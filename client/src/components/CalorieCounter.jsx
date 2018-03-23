import Section from './core/Section';


export default class CalorieCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null,
      nextId: 1,
      list: [],
    };
  }

  componentDidMount() {
    this.compute();
  }

  compute() {
    const funnystuff = parseFloat($('#funnystuff').val());
    const servingsize = parseInt($('#servingsize').val(), 10);
    const stoutiness = parseInt($('#stoutiness').val(), 10) / 100;
    const answer = funnystuff * 2.5 * servingsize * ( 1 + (stoutiness * 0.3));
    this.setState({
      answer: parseInt(answer, 10),
    });
  }

  addCurrent() {
    const funnystuff = parseFloat($('#funnystuff').val(), 10);
    const servingsize = parseInt($('#servingsize').val(), 10);
    const stoutiness = parseInt($('#stoutiness').val(), 10) / 100;
    this.setState( prevState => {
      const nextId = prevState.nextId + 1;
      return {
        nextId,
        list: prevState.list.concat([{
          id: prevState.nextId,
          answer: prevState.answer,
          funnystuff,
          servingsize,
          stoutiness,
        }]),
      };
    });
  }

  removeBeer(id) {
    this.setState( prevState => ({
      list: prevState.list.filter(b => b.id !== id),
    }));
  }

  getStoutWord(s) {
    const stoutWords = {
      'very light': 0,
      'light': 0.15,
      'brown': 0.3,
      'creamy': 0.55,
      'heavy': 0.6,
      'very dark': 0.75,
      'obsidian': 0.9,
    };
    return Object.keys(stoutWords).reduce( (prior, word) => {
      if ( !prior ) { return word; }
      // if the stoutiness is lighter than the word, use the prior
      if ( s < stoutWords[word]) { return prior; }
      // if the stoutiness is not yet heavy enough, keep going
      return word;
    }, null );
  }

  render() {
    const sizes = {
      'Taster': 5,
      'Sleeve': 16,
      'Pint': 20,
    };

    return <Section name='Craft Beer Calorie Calculator' isLight={false}>
      <div className='container'>
        <div className='row' style={{ margin: 20, }}>
          <div className='col'>
            <em>Funny Stuff</em><br/>
            <input type='number' id='funnystuff' step='0.5' defaultValue='5.5' onChange={() => {
              this.compute();
            }}/>
          </div>
          <div className='col'>
            <em>Serving Size</em><br/>
            <div className='row'>
              {Object.keys(sizes).map( name => {
                return <div key={name}
                  className='btn btn-sm btn-secondary' onClick={() => {
                  // Set the size when they click
                  $('#servingsize').val(sizes[name]);
                  this.compute();
                }}>{name}</div>
              })}
            </div>
            <input type='number' id='servingsize' defaultValue='16' onChange={() => {
              this.compute();
            }}/>
          </div>
          <div className='col'>
            <em>Stoutiness</em><br/>
            <input type='range' min='1' max='100' defaultValue='50' id='stoutiness' onChange={() => {
              this.compute();
            }}/>
          </div>
        </div>
        <div className='row' style={{ margin: 20, }}>
          <div className='col' style={{ textAlign: 'center'}}>
            {!this.state.answer ? 'Computing...' :
              <h3 style={{ color: 'white', }}>
                {`${this.state.answer} calories`}
                <div className='btn btn-sm btn-success' onClick={() => {
                  this.addCurrent();
                }}>Add</div>
              </h3>
            }
          </div>
        </div>
        <div className='row' style={{ margin: 20, }}>
          <div className='col'>
            <h1>{this.state.list.reduce( (acc, drink) => (acc + drink.answer), 0)} calories total</h1>
          </div>
        </div>
        <div className='row' style={{ margin: 20, }}>
          <div className='col'>
            {this.state.list.map( drink => {
              return <div key={drink.id} className='row'>
                <div className='col-3'>{drink.answer} calories</div>
                <div className='col-1'>{drink.funnystuff}%</div>
                <div className='col-1'>{drink.servingsize}oz</div>
                <div className='col-3'>{this.getStoutWord(drink.stoutiness)}</div>
                <div className='col-2'>
                  <div className='btn btn-sm btn-primary' onClick={() => {
                    this.removeBeer(drink.id);
                  }}>jk</div>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>;
    </Section>
  }
}
