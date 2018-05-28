import Section from '../core/Section';
import Icon from '../core/Icon';
import Link from '../core/Link';
import { ResponsiveText as RT } from '../core/Core';

import * as Skills from '../../lib/skills';

function lerp(v0, v1, t) {
  return v0 + t * (v1 - v0);
}
function toHex(val) {
  val = parseInt(val).toString(16);
  if( val.length === 1 ) {
    val = '0' + val;
  }
  return val;
}
function lerpToHex(val) {
  return toHex(lerp(180, 90, val));
}

const BASE_WIDTH = 30;

export default class SkillComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      isOpen: false,
      selectedSkill: null,
    };

    this.renderButton = this.renderButton.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  componentDidMount() {
    Skills.getAll().then( skills => {
      this.setState({
        skills: skills,
      });
      this.open();
    });
  }

  open() {
    this.state.skills.forEach( skill => {
      $('#' + skill.id).animate({
        width: lerp(BASE_WIDTH, 100, skill.level) + '%',
      }, 2000, () => {
        this.setState({
          isOpen: true,
        });
      });
    });
  }

  close() {
    $('.skill').animate({
      width: BASE_WIDTH + '%',
    }, () => {
      this.setState({
        isOpen: false,
        selectedSkill: null,
      });
    });
  }

  onSelectSkill(skill) {
    this.setState({
      selectedSkill: skill,
    });
  }

  renderButton(skill) {
    const style = {
      width: BASE_WIDTH + '%',
      textAlign: 'left',
    };
    if( this.state.selectedSkill && skill.name === this.state.selectedSkill.name ) {
      style.backgroundColor = '#444';
      style.color = 'white';
    }
    else {
      style.backgroundColor = '#' + lerpToHex(skill.level) + 'b632';
    }

    return <div
      key={skill.name}
      className='row'>
      <div className='col'>
        <button
          id={skill.id}
          style={style}
          type='button'
          className='skill btn btn-sm'
          onClick={() => {
            this.onSelectSkill(skill);
          }}>
          {skill.name.toLowerCase()}
        </button>
      </div>
    </div>;
  }

  renderInfo(selectedSkill) {
    if( !selectedSkill ) {
      return null;
    }
    const titles = [
      'Prior experience',
      'Intermediate',
      'Very proficient',
      'Expert',
    ];
    const titleIndex = Math.min(titles.length -1, Math.floor(parseFloat(selectedSkill.level)*titles.length));
    return <div className='card text-white bg-dark mb-3'>
      <div className="card-header">
        {titles[titleIndex]}
        <button type="button" className="close" aria-label="Close" onClick={() => {
          this.onSelectSkill(null);
        }}>
          <i className="fa fa-times" style={{color:'white'}} aria-hidden="true"></i>
        </button>
      </div>
      <div className="card-body">
        <h3 className="card-title">{selectedSkill.name}</h3>
        <p className="card-text">{selectedSkill.description}</p>
      </div>
    </div>;
  }

  render() {
    return <Section name="skills" isLight={this.props.isLight}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              {RT(
                'Tap the skills for extra information.',
                'Click the skills for extra information.'
              )}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.skills.map(this.renderButton)}
          </div>
          <div className="col" style={{color:'black'}}>
            {this.renderInfo(this.state.selectedSkill)}
          </div>
        </div>
      </div>
    </Section>;
  }
}
