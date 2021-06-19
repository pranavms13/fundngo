import React, { Component } from 'react';
import NavbarCustom from '../ngocomponents/nav';


import NgoTrackingDonationPage from './ngoTracking';
import NgoWalletPage from './ngowallet';
import AboutUsPage from './aboutus';
import NgoDashboard from './ngoDashboard';

// Pages
// 0 - Dashboard
// 1 - Track Donations
// 2 - Wallet
// 3 - About Us

class NgoMainPage extends Component {
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
                {this.state.pageactive===0 && <NgoDashboard/>}
                {this.state.pageactive===1 && <NgoTrackingDonationPage/>}
                {this.state.pageactive===2 && <NgoWalletPage/>}
                {this.state.pageactive===3 && <AboutUsPage/>}
            </div>
        );
    }
}
 
export default NgoMainPage;