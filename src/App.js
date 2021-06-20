// import logo from './logo.svg';
import React, { Component, useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoadingScreen from 'react-loading-screen';

import LoginPage from './donorpages/login';
import RegisterPage from './common/register';

import RolePage from './donorpages/roles';

import MainPage from './donorpages/main';
import NgoMainPage from './ngopages/main';
import Homepage from './common/home';

import DonorWalletPage from './donorpages/donorwallet';
import TotalDonate from './donorcomponents/totalDonate';
import DonationCard from './donorcomponents/donationCard';
import DashWelcomeCard from './donorcomponents/dashWelcomeCard';
import DonorTrackingDonationPage from './donorpages/donorTracking';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingScreen
              loading={loading}
              bgColor='#f1f1f1'
              spinnerColor='#9ee5f8'
              textColor='#676767'
              text='Loading'
            >
      <div className="App">
          <Router>
            <Switch>
              <Route path="/register">
                <RegisterPage loading={setLoading}/>
              </Route>
              <Route path="/login">
                <LoginPage loading={setLoading}/>
              </Route>
              <Route path="/donor">
                <MainPage loading={setLoading}/>
              </Route>
              <Route path="/ngo">
                <NgoMainPage loading={setLoading}/>
              </Route>
              <Route path="/">
                <Homepage loading={setLoading}/>
              </Route> 
            </Switch>
          </Router>
      </div>
    </LoadingScreen>
  );
}

export default App;
