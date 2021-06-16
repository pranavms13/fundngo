// import logo from './logo.svg';
import LoginPage from './pages/login';
import RolePage from './pages/roles';

import MainPage from './pages/main';

import DonorWalletPage from './pages/donorwallet';
import TotalDonate from './components/totalDonate';
import DonationCard from './components/donationCard';
import DashWelcomeCard from './components/dashWelcomeCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <DashWelcomeCard/>
    </div>
  );
}

export default App;
