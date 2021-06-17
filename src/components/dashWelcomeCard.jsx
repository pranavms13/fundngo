import React, { Component } from 'react';
import welcomeCard from '../images/donorPeeps.png';

class DashWelcomeCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{marginTop: '15px'}}>
                <img src={welcomeCard} style={{ width: '90%' }} alt="Donor"/>
            </div>
        );
    }
}
 
export default DashWelcomeCard;