// import logo from './logo.svg';
import React, { Component }  from 'react';
import LoginPage from './donorpages/login';
import RolePage from './donorpages/roles';

import MainPage from './donorpages/main';

import DonorWalletPage from './donorpages/donorwallet';
import TotalDonate from './donorcomponents/totalDonate';
import DonationCard from './donorcomponents/donationCard';
import DashWelcomeCard from './donorcomponents/dashWelcomeCard';
import CreateDonation from './ngopages/createDonate';
import DonorTrackingDonationPage from './donorpages/donorTracking';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <CreateDonation/>
    </div>
  );
}

export default App;
