import React, { Component } from 'react';
import welcomeCard from '../images/donorPeeps.png';

class DashWelcomeCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img src={welcomeCard}></img>
            </div>
        );
    }
}
 
export default DashWelcomeCard;