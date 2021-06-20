import React, { Component } from 'react';

import logo from '../images/logo_light.png';

class Homepage extends Component {
    state = {  }
    render() { 
        return (
            <div style={{ height: '100%', width: '100%', background: '#354f52', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img src={logo} alt="logo"/>
                <div style={{ display: 'flex' }}>
                    <div className="home-btns" onClick={() => {window.location.href = "/login"}}>LOGIN</div>
                    <div className="home-btns" onClick={() => {window.location.href = "/register"}}>REGISTER</div>
                </div>
            </div>
        );
    }
}
 
export default Homepage;