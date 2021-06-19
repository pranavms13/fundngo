// import logo from './logo.svg';
import React, { Component }  from 'react';
import LoginPage from './donorpages/login';
import RolePage from './donorpages/roles';

import MainPage from './donorpages/main';
import NgoMainPage from './ngopages/main';

import DonorWalletPage from './donorpages/donorwallet';
import TotalDonate from './donorcomponents/totalDonate';
import DonationCard from './donorcomponents/donationCard';
import DashWelcomeCard from './donorcomponents/dashWelcomeCard';
import DonorTrackingDonationPage from './donorpages/donorTracking';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NgoMainPage/>
    </div>
  );
}

export default App;
