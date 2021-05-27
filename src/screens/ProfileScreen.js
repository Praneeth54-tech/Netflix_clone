import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
                <h3>Plans (Current Plan premium)</h3>
                <h4>Renewal date: 05/05/2001</h4>
              <div className="plans">
                <div className='plan'>
                  <h4>Netflix Standard</h4>
                  <button className="plansButton">Subscribe</button>
                </div>
                <div className='plan'>
                  <h4>Netflix Basic</h4>
                  <button className="plansButton">Subscribe</button>
                </div>
                <div className='plan'>
                  <h4>Netflix Premium</h4>
                  <button className="currentButton">Current Package</button>
                </div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
