import React from 'react';
import wavey from './wavey.png';
import pusculitz from './pusculitz.svg';
import loginmare2 from './loginmare2.svg';
// import devFocus from './undraw_dev_focus_re_6iwt.svg';
// import personalInfo from './undraw_personal_info_re_ur1n.svg';
// import '@fortawesome/fontawesome-free/css/all.css'
import './Login.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userEmail: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Code for submitting form goes here
  }

  render() {
    return (
      <div>
        <div className="wave">
          <img src={wavey} alt="" />
        </div>
        <div className="container">
          <div className="img">
            <img src={loginmare2} alt="" />
          </div>
          <div className="login-content">
            <form onSubmit={this.handleSubmit}>
              <img src={pusculitz} />
              <h2 className="title">Get started</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input type="text" id="username" name="username" placeHolder='Username' className="input" required value={this.state.username} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="input-div email">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input type="text" id="userEmail" name="userEmail" placeholder='Email' className="input" required value={this.state.userEmail} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input type="password" id="password" placeholder='Password' name="password" className="input" required value={this.state.password} onChange={this.handleInputChange} />
                </div>
              </div>
              <a href="/Login">Already have an account?</a>
              <a href="/Dashboard">Go back to home page</a>
              <input type="submit" className="btn" value="Signup" onClick={() => { window.location.href = "/dashboard"}} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
