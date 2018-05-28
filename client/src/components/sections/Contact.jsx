import Section from '../core/Section';
import Icon from '../core/Icon';
import Link from '../core/Link';


const buttonStatus = {
  'SEND': 0,
  'SENDING': 1,
  'SENT': 2,
};

export default class Contact extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: buttonStatus.SEND,
    };

    this.onSend = this.onSend.bind(this);
  }

  onSend() {
    const email = $('#email').val();
    const message = $('#message').val();

    console.log('sending message: ', email, message);
    this.setState({
      status: buttonStatus.SENDING,
    });

    setTimeout(() => {
      this.setState({
        status: buttonStatus.SENT,
      });
    }, 1000);
  }

  render() {
    return <Section name="contact" isLight={this.props.isLight}>
      <div className="container">
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id="email" placeholder="your.email@address.com"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea className="form-control" id="message" placeholder='Your message here'></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col text-right">
            <button
              className={`btn btn-success ${this.state.status!==buttonStatus.SEND?'disabled':''}`}
              onClick={this.onSend}
              disabled={this.state.status!==buttonStatus.SEND}>
              {this.state.status===buttonStatus.SEND?'Send':null}
              {this.state.status===buttonStatus.SENDING?
                <i className="fa fa-spin fa-circle-o-notch fa-2x" aria-hidden="true"></i>
                :null}
              {this.state.status===buttonStatus.SENT?
                <i className="fa fa-check fa-2x"></i>
                :null}
            </button>
          </div>
        </div>
      </div>
    </Section>;
  }
}
