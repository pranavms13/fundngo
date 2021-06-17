import React, { Component } from 'react';
import NavbarCustom from '../donorcomponents/nav';


import DonorTrackingDonationPage from './donorTracking';
import DonorWalletPage from './donorwallet';
import AboutUsPage from './aboutus';
import DonorDashboard from './dashboard';

// Pages
// 0 - Dashboard
// 1 - Track Donations
// 2 - Wallet
// 3 - About Us

class MainPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            pageactive: 0
        }
        this.onPageSelect = this.onPageSelect.bind(this);
    }
    onPageSelect(page){
        this.setState({pageactive: page});
    }
    render() { 
        return (
            <div style={{display : 'flex'}}>
                <NavbarCustom pageactive={this.state.pageactive} onPageSelect={this.onPageSelect}/>
                {this.state.pageactive===0 && <DonorDashboard/>}
                {this.state.pageactive===1 && <DonorTrackingDonationPage/>}
                {this.state.pageactive===2 && <DonorWalletPage/>}
                {this.state.pageactive===3 && <AboutUsPage/>}
            </div>
        );
    }
}
 
export default MainPage;