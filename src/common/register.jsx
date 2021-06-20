import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Web3 from 'web3';

import logolight from '../images/logo_light.png';

import config from '../config.json';

class RegisterPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            choice: 'ngo',
            name: '',
            email: '',
            pass: '',
            conpass: '',
            ngoid:'',
            wallet: null
        }
        this.chooser = this.chooser.bind(this);
        this.connectToMetamask = this.connectToMetamask.bind(this);
        this.walletchecker = this.walletchecker.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    chooser(choice){
        this.setState({
            choice: choice
        })
    }
    async componentDidMount(){
        if (typeof window.ethereum === 'undefined' || (typeof window.web3 === 'undefined')) {
            alert("Please install Metamask to use FundNGO")
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",'_blank')
        }else{
            await window.ethereum.send('eth_requestAccounts');
            this.web3 = new Web3(window.ethereum);
        }
    }

    async connectToMetamask(){
        let address = await this.web3.eth.getAccounts();
        this.setState({wallet: address[0]})
    }

    onSubmit(){
        if(this.state.conpass === this.state.pass){
            this.props.loading(true)
            if(this.state.choice === "ngo"){
                axios.post(`${config.host}/${this.state.choice}/register`,{
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.pass,
                    wallet: this.state.wallet
                }).then((result) => {
                    console.log(result)
                    this.setState({ngoid: result.data})
                    this.props.loading(false)
                    window.localStorage.setItem('fundngo', JSON.stringify(this.state))
                    window.location.href = '/ngo'
                })
            }else{
                axios.post(`${config.host}/${this.state.choice}/register`,{
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.pass
                }).then((result) => {
                    console.log(result)
                    this.setState({userid: result.data})
                    this.props.loading(false)
                    window.localStorage.setItem('fundngo', JSON.stringify(this.state))
                    window.location.href = '/donor'
                })
            }
            
        }
    }

    walletchecker(){
        if(this.state.choice==="ngo"){
            if(this.state.wallet===null) return true
            else return false
        }else{
            return false
        }
    }
    render() { 
        return ( 
            <div style={{background:'#ffffff' , height: '100%'}}>
            <div className="role-header">
                <img src={logolight} alt="Logo" className="logo-light"/>
            </div>
            <Container>
                <Row className= "justify-content-center" style={{paddingTop: '20px'}}>
                    <Col xs={6}>
                        <div className= "register-card">
                            <Form>
                            <Form.Label>SELECT YOUR ROLE</Form.Label>
                                <div style={{ display: 'flex' }}>
                                    <div className="choice-btns" style={{ 
                                        color: this.state.choice==="ngo"?'#354f52':'#cfcfcf',
                                        boxShadow: this.state.choice==="ngo"?'0px 4px 5px rgb(0 0 0 / 25%)': '0px 0px 0px rgb(0 0 0 / 25%)'
                                    }}  onClick={() => {this.chooser("ngo")}}
                                    >{this.state.choice==="ngo"?<u><b>NGO</b></u>:"NGO"}</div>
                                    <div className="choice-btns" style={{ 
                                        color: this.state.choice==="donor"?'#354f52':'#cfcfcf',
                                        boxShadow: this.state.choice==="donor"?'0px 4px 5px rgb(0 0 0 / 25%)': '0px 0px 0px rgb(0 0 0 / 25%)'
                                    }} onClick={() => {this.chooser("donor")}}
                                    >{this.state.choice==="donor"?<u><b>DONOR</b></u>:"DONOR"}</div>
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.choice==="ngo"?"ORGANIZATION":"FULL"} NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => {this.setState({name: e.target.value})}} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{this.state.choice==="ngo"?"ORGANIZATION":""} EMAIL ADDRESS</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {this.setState({email: e.target.value})}}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>PASSWORD</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => {this.setState({pass: e.target.value})}}/>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONFIRM PASSWORD</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" onChange={(e) => {this.setState({conpass: e.target.value})}}/>
                                </Form.Group>
                                

                                {this.state.choice==="ngo" &&
                                    <div>
                                        <Button onClick={() => {this.connectToMetamask()}}>Get Wallet from MetaMask</Button>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>WALLET ADDRESS</Form.Label>
                                        <div className="wallet-address" style={{fontSize: '18px', letterSpacing: '1px', marginTop:'0px'}}><b>
                                            {this.state.wallet===null ? "none" : this.state.wallet}
                                        </b></div>
                                        </Form.Group>
                                    </div>
                                }

                                

                                <Button variant="primary" type="button" onClick={() => {this.onSubmit()}} disabled={this.walletchecker()}>
                                SUBMIT
                                </Button>     
                                                        
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
 
export default RegisterPage;