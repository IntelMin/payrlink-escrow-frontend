import React from 'react';
import {Container, Row, Col, card} from 'react-bootstrap';
import aboutbg from '../../images/aboutbg.png';
import securebg from '../../images/securebg.png';
import secure from '../../images/secure.png';
function About(){
    return(
        <Container fluid className="homeabout"  style={{ backgroundImage: `url(${aboutbg})` }}>
            <Container>
                <Row>
                    <Col md={8}>
                        <card>
                            <h2>About The PayrLink</h2>
                            <p>PayrLink is a decentralized application powered by Blockchain technology that works as a decentralized third-party arbitrates transactions in a private manner from very simple and highly complex ones.</p>
                            <p>The result is a private solution and secure escrow service that renders ultimate judgements in a fast, inexpensive, reliable and decentralized way.</p>
                            <a href="#">Read More</a>
                        </card>
                    </Col>
                    <Col md={4}>
                            <card>
                            <span className="aboutsecure" style={{ backgroundImage: `url(${securebg})` }}>
                                <img src={secure} alt=""/>
                                <h3>Highly Secure</h3>
                            </span>
                            </card>
                    </Col>
                  
                </Row>
            </Container>    
        </Container>

    )
}

export default About;

