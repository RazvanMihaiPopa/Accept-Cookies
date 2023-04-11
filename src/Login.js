import wavey from './wavey.png';
import paymoney from './paymoney.svg';
import loginmare from './loginmare.svg';
import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {
  function submitForm(event) {
    event.preventDefault();
    // handle form submission logic here
  }

  return (
    <>
      <div className="wave">
        <img src={wavey} alt="" />
      </div>
      <div className="container">
        <div className="img">
          <img src={paymoney} alt="" />
        </div>
        <div className="login-content">
          <form onSubmit={submitForm}>
            <img src={loginmare} alt="" />
            <h2 className="title">Welcome</h2>
            <div className="input-div email">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  id="userEmail"
                  name="userEmail"
                  placeholder='Email'
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Password'
                  className="input"
                  required
                />
              </div>
            </div>
            <a href='/'>Don't have an account?</a>
            <a href="/Dashboard">Go back to home page</a>
            <input type="submit" className="btn" value="Login" onClick={() => window.location.href="../dashboard"}/>
          </form>
        </div>
      </div>
    </>
  );
}
