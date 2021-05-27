import React, {useState} from 'react';
import './LoginScreen.css'
import SignInScreen from './SignUpScreen';

function LoginScreen() {
    const [singIn,setSignIn] = useState(false);
    return (
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img
            className="loginScreen__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginScreen__button" onClick={() => setSignIn(true)}>Sign In</button>
          <div className="loginScreen__gradient"></div>
          <div className="loginScreen__body">
              {singIn ? (
                  <SignInScreen/>
              ) : (
            <>
              <h1>Unlimited files, TV programs and more,</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Adress" />
                  <div className="">
                  <button className='loginScreen__getStarted'
                  onClick={() => setSignIn(true)}>GET STARTED</button>
                  </div>
                </form>
              </div>
            </>)}
          </div>
        </div>
      </div>
    );
}
export default LoginScreen;