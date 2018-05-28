import Section from './core/Section';

function getStoutWord(s) {
  const stoutWords = {
    'very light': 0,
    light: 0.15,
    brown: 0.3,
    creamy: 0.55,
    heavy: 0.6,
    'very dark': 0.75,
    obsidian: 0.9,
  };
  return Object.keys(stoutWords).reduce((prior, word) => {
    if (!prior) { return word; }
    // if the stoutiness is lighter than the word, use the prior
    if (s < stoutWords[word]) { return prior; }
    // if the stoutiness is not yet heavy enough, keep going
    return word;
  }, null);
}


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



  render() {
    const sizes = {
      Taste: 5,
      Sleeve: 16,
      Pint: 20,
      '½ L': 16.9,
      '1 L': 33.8,
    };

    return (<Section name='Beeralyzer' isLight={false}>
      <div className='container text-center'>
        <div className='row' style={{ marginTop: 20, }}>
          <div className='col'>
            <h3>Funny Stuff</h3>
            <input type='number'
              id='funnystuff' step='0.5' defaultValue='5.5'
              style={{
                width: '4em',
              }}
              onChange={() => {
                this.compute();
              }}/>
            <div className='btn btn-sm btn-primary' onClick={() => {
              const oldVal = parseFloat($('#funnystuff').val());
              $('#funnystuff').val(oldVal - 0.5);
              this.compute();
            }}>-</div>
            <div className='btn btn-sm btn-primary' onClick={() => {
              const oldVal = parseFloat($('#funnystuff').val());
              $('#funnystuff').val(oldVal + 0.5);
              this.compute();
            }}>+</div>
          </div>
          <div className='col'>
            <h3>Stoutiness</h3>
            <input type='range' min='1' max='100' defaultValue='50' id='stoutiness' onChange={() => {
              this.compute();
            }}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3>Serving Size</h3>
            <div className='container'>
              <div className='row text-center'>
                <div className='col'>
                  {Object.keys(sizes).map( name => {
                    return <div key={name}
                      className='btn btn-sm btn-secondary' onClick={() => {
                      // Set the size when they click
                      $('#servingsize').val(sizes[name]);
                      this.compute();
                    }}>{name}</div>;
                  })}
                </div>
              </div>
              <div className='row text-center'>
                <div className='col'>
                  <input type='number' id='servingsize' defaultValue='16'
                    style={{
                      width: '4em',
                    }}
                    onChange={() => {
                      this.compute();
                    }}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginTop: 20, }}>
          <div className='col' style={{ textAlign: 'center'}}>
            {!this.state.answer ? 'Computing...' :
              <h3 style={{ color: 'white', }}>
                {`${this.state.answer} calories `}
                <div className='btn btn-sm btn-success' onClick={() => {
                  this.addCurrent();
                }}>Add</div>
              </h3>
            }
          </div>
        </div>
        { this.state.list.length === 0 ? null : <div>
          <div className='row' style={{ marginTop: 20, }}>
            <div className='col'>
              <h1>{this.state.list.reduce( (acc, drink) => (acc + drink.answer), 0)} calories total</h1>
            </div>
          </div>
          <div className='row' style={{ marginTop: 20, }}>
            <div className='col'>
              <div className='row'>
                <div className='col-2'>Calories</div>
                <div className='col-2'>ABV</div>
                <div className='col-2'>Size</div>
                <div className='col-4'>Dunkelheit</div>
                <div className='col-2'></div>
              </div>
              {this.state.list.map( drink => {
                return <div key={drink.id} className='row' style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                }}>
                  <div className='col-2'>{drink.answer}</div>
                  <div className='col-2'>{drink.funnystuff}%</div>
                  <div className='col-2'>{drink.servingsize}oz</div>
                  <div className='col-4'>{getStoutWord(drink.stoutiness)}</div>
                  <div className='col-2 text-right'>
                    <div className='btn btn-sm btn-primary' onClick={() => {
                      this.removeBeer(drink.id);
                    }}>X</div>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>}
      </div>
    </Section>);
  }
}
