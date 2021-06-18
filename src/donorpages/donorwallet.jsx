import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Web3 from 'web3';

import DonorBalanceCard from '../donorcomponents/donorbalance';
// import NavbarCustom from '../donorcomponents/nav';
import TxRow from '../donorcomponents/transaction';

import usericon from '../images/user.png';
import exclamation from '../images/exclamation.png';

class DonorWalletPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            walletaddress: null,
            walletbalance: 0,
            connected : false
        }
        // this.web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        this.web3 = null;
        this.connectWallet = this.connectWallet.bind(this);
    }
    async componentDidMount(){
        await window.ethereum.send('eth_requestAccounts');
        this.web3 = new Web3(window.ethereum);
    }
    async connectWallet(){
        let address = await this.web3.eth.getAccounts();
        console.log(address);
        // eslint-disable-next-line no-undef
        let bal = await this.web3.eth.getBalance(address[0])/Math.pow(10,18);
        this.setState({
            walletaddress: address[0],
            walletbalance: bal,
            connected: true
        })
        console.log(bal);
    }
    async loadtxns(){
        
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
                            <DonorBalanceCard balance={this.state.walletbalance}/>
                        }{this.state.walletbalance>0 && 
                            <DonorBalanceCard balance={this.state.walletbalance}/>
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