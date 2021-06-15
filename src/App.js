// import logo from './logo.svg';
import LoginPage from './pages/login';
import RolePage from './pages/roles';

import DonorWalletPage from './pages/donorwallet';
import TotalDonate from './components/totalDonate';
import Navbar from './components/nav';
import DonorTrackingDonation from './pages/donorTracking';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <DonorTrackingDonation/>
    </div>
  );
}

export default App;
