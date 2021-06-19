import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logolight from '../images/logo_light.png';

import dashsvg from '../images/dash.svg';
import tracksvg from '../images/track.svg';
import walletsvg from '../images/wallet.svg';
import aboutsvg from '../images/about.svg';

import { DashSVG, TrackSVG, WalletSVG, AboutSVG, LogoutSVG } from '../images/navsvg';

class NavbarCustom extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageactive: 0
        }
        this.onPageSelect = this.onPageSelect.bind(this);
    }
    onPageSelect(page){
        this.setState({pageactive: page});
        this.props.onPageSelect(page);
    }
    render() { 
        return ( 
            <Nav defaultActiveKey="/home" className="flex-column my-nav">
                <Navbar.Brand href="#home" style={{marginBottom: '55px'}}>
                <img
                    src={logolight}
                    width="190"
                    height="42"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Nav.Link onClick={() => {this.onPageSelect(0)}}><DashSVG isactive={this.state.pageactive===0}/><span style={{ paddingLeft: '10px', color:this.state.pageactive===0?'#ffffff':'#57777a' }}>Dashboard</span></Nav.Link>
                <Nav.Link onClick={() => {this.onPageSelect(1)}}><TrackSVG isactive={this.state.pageactive===1}/><span style={{ paddingLeft: '10px', color:this.state.pageactive===1?'#ffffff':'#57777a'}}>Track Donations</span></Nav.Link>
                <Nav.Link onClick={() => {this.onPageSelect(2)}}><WalletSVG isactive={this.state.pageactive===2}/><span style={{ paddingLeft: '10px', color:this.state.pageactive===2?'#ffffff':'#57777a'}}>Wallet</span></Nav.Link>
                <Nav.Link onClick={() => {this.onPageSelect(3)}}><AboutSVG isactive={this.state.pageactive===3}/><span style={{ paddingLeft: '10px', color:this.state.pageactive===3?'#ffffff':'#57777a'}}>About Us</span></Nav.Link>
                <Nav.Link eventKey="link-3" className= "logout"><LogoutSVG/><span style={{ paddingLeft: '10px', color:'#ffffff'}}>Logout</span></Nav.Link>
            </Nav> 
        );
    }
}
 
export default NavbarCustom;