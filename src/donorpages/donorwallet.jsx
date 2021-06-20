import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Web3 from 'web3';

import ABI from '../FundNGO.json';
import config from '../config.json';

import DonorBalanceCard from '../donorcomponents/donorbalance';
// import NavbarCustom from '../donorcomponents/nav';
import TxRow from '../donorcomponents/transaction';

import usericon from '../images/user.png';
import exclamation from '../images/exclamation.png';
import axios from 'axios';


class DonorWalletPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            walletaddress: null,
            walletbalance: 0,
            connected : false,
            user: ""
        }
        // this.web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        this.web3 = null;
        this.connectWallet = this.connectWallet.bind(this);
        this.addbalance = this.addbalance.bind(this);
    }
    async componentWillMount(){
        if (typeof window.ethereum === 'undefined' || (typeof window.web3 === 'undefined')) {
            alert("Please install Metamask to use FundNGO")
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",'_blank')
        }else{
            await window.ethereum.send('eth_requestAccounts');
            this.web3 = new Web3(window.ethereum);
            this.setState({
                user: JSON.parse(window.localStorage.getItem('fundngo'))
            })
        }
    }
    async connectWallet(){
        let address = await this.web3.eth.getAccounts();
        console.log(address);
        // eslint-disable-next-line no-undef
        let bal = await this.web3.eth.getBalance(address[0])/Math.pow(10,18);
        let fndaccount = new this.web3.eth.Contract(ABI.abi,"0xF632f317d9c9D6F14Be734d1e9b0e8f3678160BB")
        console.log(fndaccount)
        let fndbal = await fndaccount.methods.balanceOf(address[0]).call();
        console.log(fndbal)
        this.setState({
            walletaddress: address[0],
            walletbalance: fndbal/Math.pow(10,18),
            connected: true
        })
        console.log(bal);
    }
    async loadtxns(){
        
    }
    addbalance(){
        axios.post("http://localhost:4000/donor/addtokens",{
            email: this.state.user.email,
            amount: 100,
            wallet: this.state.walletaddress
        }).then(result => {
            alert(`Added 100 FND`)
        })
    }
    render() { 
        return (
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px'}}>
                <div>
                    <div style={{ clear: 'both', display: 'flex' }}>
                        <div style={{ width: '75%' }}>
                            <div className="page-headings"><b>My Wallet</b></div>
                            <div className="page-subheadings">Fill all the details to donate funds. All fields must be filled compulsorily</div>
                        </div>
                        <div className="donor-name" style={{ float:'right'}}>
                            Donor Name
                            <img src={usericon} style={{ height: '36px', width: '36px', float: 'right', marginLeft: '10px'}} alt="User"/>
                        </div>
                    </div>
                </div>
                
                <Row style={{paddingTop: '20px'}}>
                    <Col xs={4}>
                        <div style={{display: 'flex', paddingBottom: '15px'}}>
                            <img src={exclamation} style={{ height: '25px', width: '25px' }} alt="!"/>
                            <div style={{ color: '#AA794F', paddingLeft: '5px', paddingTop: '1px', letterSpacing: '0.05rem' }}>ETH cannot be converted back to INR</div>
                        </div>
                        {this.state.walletbalance===0 && 
                            <DonorBalanceCard balance={this.state.walletbalance} addbalance={this.addbalance}/>
                        }{this.state.walletbalance>0 && 
                            <DonorBalanceCard balance={this.state.walletbalance} addbalance={this.addbalance}/>
                        }
                    </Col>
                    <Col xs={8} style={{padding: '25px', paddingTop: '50px'}}>
                        <Button style={{ 
                                background: !this.state.connected?'#354f52':'#ffffff', 
                                color: !this.state.connected?'#ffffff':'#354f52', 
                                borderStyle: 'none', 
                                disabled: this.state.connected
                            }} 
                            onClick={this.connectWallet}>
                                {!this.state.connected ? "Connect to MetaMask":<div><span style={{ color: '#CBE896' }}>&#x1f534;&#xfe0e; </span> Connected !</div>}
                            </Button>

                        <div className="page-subheadings">
                            Wallet Address
                        </div>
                        <div className="wallet-address" style={{fontSize: '18px', letterSpacing: '1px', marginTop:'0px'}}><b>
                            {this.state.walletaddress===null ? "none" : this.state.walletaddress}
                        </b></div>
                        <small style={{ color: '#AA794F' }}>Click address to copy</small>

                    </Col>
                </Row>
                <Row style={{marginTop: '15px'}}>
                    <Col xs={12}>
                        <div className="page-subheadings" style={{ color: '#354f52' }}>Transaction History</div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '5px',  }}>
                    <Col xs={10} style={{ maxHeight: '380px' }}>
                        <div style={{ overflowY: 'auto' , height: '100%', letterSpacing: '1px'}}>
                            <TxRow/>
                            <TxRow/>
                            <TxRow/>
                            <TxRow/>
                            <TxRow/>
                            <TxRow/>
                            <TxRow/>
                            <TxRow/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default DonorWalletPage;