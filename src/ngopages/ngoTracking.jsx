import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavbarCustom from '../donorcomponents/nav';
import NgoTrackDonate from '../ngocomponents/ngoTrackDonate';

import usericon from '../images/user.png';

class NgoTrackingDonationPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            renderedcards : []
        }
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
                <NgoTrackDonate dono={data[i]}/>
            )
        }
        return retarr;
    }
    render() { 
        return ( 
            <Container fluid style={{paddingTop: '30px', background: '#E5E5E5', height: '100%', marginLeft: '270px', paddingLeft: '80px', width: '80%'}}>
                <div>
                    <div style={{ clear: 'both', display: 'flex' }}>
                        <div style={{ width: '80%' }}>
                            <div className="page-headings"><b>Tracking Donations</b></div>
                            <div className="page-subheadings">Keep track of all your donations and how many tokens you have raised for each cause.</div>
                        </div>
                        <div className="donor-name" style={{ float:'right' }}>
                            NGO Name
                            <img src={usericon} style={{ height: '36px', width: '36px', float: 'right', marginLeft: '10px'}} alt="User"/>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col xs={12}>
                        <div style={{maxHeight:'600px', overflowY:'auto'}}>
                            {this.state.renderedcards}

                        </div>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export  default NgoTrackingDonationPage;