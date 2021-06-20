import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import DashWelcomeCard from '../ngocomponents/dashWelcomeCard';
import DonateScheme from '../ngocomponents/ngoDonateScheme';
import CreateButton from '../images/create-btn.png'
import usericon from '../images/user.png';

class NgoDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: "",
            dataresults: null,
            renderedcards: []
        }
        this.rendercards = this.rendercards.bind(this);
    }
    async componentWillMount(){
        let user = JSON.parse(window.localStorage.getItem('fundngo'));
        this.setState({
            user: JSON.parse(window.localStorage.getItem('fundngo'))
        })
        await axios.post("http://localhost:4000/ngo/getschemes",{
            ngoid: user.ngoid
        }).then(result => {
            if(result){
                this.setState({
                    dataresults: result.data,
                    renderedcards: this.rendercards(result.data)
                })
            }
            console.log(result)
        })
    }
    rendercards(data){
        var retarr = []
        for(var i = 0; i< data.length; i++){
            retarr.push(
                <DonateScheme name={data[i].donation_name} date={data[i].donation_date} desc={data[i].donation_desc}/>
            )
        }
        return retarr;
    }
    render() { 
        return (
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px', width: '80%'}}>
                <div style={{ marginLeft: '15px' }}>
                    <input type="text" name="search" className="searchbar" placeholder="Search"/>
                    <div className="donor-name" style={{ float:'right' }}>
                        {this.state.user.name}
                        <img src={usericon} style={{ height: '36px', width: '36px', float: 'right', marginLeft: '10px'}} alt="User"/>
                    </div>
                    
                </div>

                <Row>
                    <Col xs={9}>
                        <DashWelcomeCard/>
                    </Col>
                    <Col xs={3}>
                        <div style={{marginTop: '68px', float: 'center'}}>
                            <img src={CreateButton} style={{maxWidth: '72%'}}/>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <div style={{ marginTop: '35px' }}>
                        <div className="page-subheadings" style={{ color: '#354f52', fontWeight: 'bold' }}>Donation Schemes</div>
                    </div>

                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={{ maxHeight: '400px', overflowX: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                            {this.state.renderedcards}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default NgoDashboard;