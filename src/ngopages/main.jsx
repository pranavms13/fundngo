import React, { Component } from 'react';
import NavbarCustom from '../ngocomponents/nav';


import NgoTrackingDonationPage from './ngoTracking';
import NgoWalletPage from './ngowallet';
import AboutUsPage from './aboutus';
import NgoDashboard from './ngoDashboard';
import Purchase from './purchase'
import CreateScheme from './createDonate'

// Pages
// 0 - Dashboard
// 1 - Track Donations
// 2 - Wallet
// 3 - Purchase
// 4 - About us

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
                {this.state.pageactive===1 && <CreateScheme/>}
                {this.state.pageactive===2 && <NgoTrackingDonationPage/>}
                {this.state.pageactive===3 && <NgoWalletPage/>}
                {this.state.pageactive===4 && <Purchase/>}
                {this.state.pageactive===5 && <AboutUsPage/>}
            </div>
        );
    }
}
 
export default NgoMainPage;