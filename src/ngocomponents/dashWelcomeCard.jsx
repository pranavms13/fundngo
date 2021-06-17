import React, { Component } from 'react';
import ngoWelcomeCard from '../images/NGOpeeps.png';

class DashWelcomeCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{marginTop: '15px'}}>
                <img src={ngoWelcomeCard} style={{ width: '90%' }} alt="NGO"/>
            </div>
        );
    }
}
 
export default DashWelcomeCard;