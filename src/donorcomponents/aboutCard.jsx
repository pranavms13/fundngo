import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import piri from '../images/priyanka.png';


class AboutCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about-us-card">
                <img src={piri} style={{width:'75px', height:'75px', borderRadius: '50%'}}></img>
                <div>Priyanka Prashanth</div>
                <div style={{fontWeight:'bold'}}>SAGE</div>
                <p>She is our bubbly <b>User Experience Designer.</b> Her research abilities are so strong, we already know everything about you judges ;) She may overthink, but hey, who do you think applied their brains for our Web App!?</p>
                <b>"The quote for the particular person"</b>
            </div>
         );
    }
}
 
export default AboutCard;