import React from 'react';
import {Container, Card, Row, Col} from 'react-bootstrap';
import featureimg1 from '../../assets/image/featureimg1.png';
import featureimg2 from '../../assets/image/featureimg2.png';
import featureimg3 from '../../assets/image/featureimg3.png';
import featureicon1 from '../../assets/image/featureicon1.png';
import featureicon2 from '../../assets/image/featureicon2.png';
import featureicon3 from '../../assets/image/featureicon3.png';
function Features(){
    return(
        <Container fluid className="homefeatures" >
            <Container>
                    <Card>    
                        <Card.Header>Our Features</Card.Header>
                    </Card>
                    <Row>
                            <Col md={4}>
                                <card className="featureblock">
                                    <card className="featureblockimg">
                                    <Card.Img src={featureimg1} />
                                        <card className="featureoverlaytxt">
                                        <Card.Img src={featureicon1} />
                                        <h3>Crypto Escrow service</h3> 
                                        </card>    
                                    </card> 
                                    <p>Send cryptos to get secured by PayrLink.</p>   
                                    <a href="#">Read More</a>
                                </card>
                            </Col>
                            <Col md={4}>
                                <card className="featureblock">
                                    <card className="featureblockimg">
                                    <Card.Img src={featureimg2} />
                                        <card className="featureoverlaytxt">
                                        <Card.Img src={featureicon2} />
                                        <h3>Decentralized Arbitration</h3> 
                                        </card>    
                                    </card> 
                                    <p>The recipient's address is protected by ZKP scheme, so that no one can track, even PayrLink.
All the transactions are managed in a private manner by PayrLink.</p>   
                                    <a href="#">Read More</a>
                                </card>
                            </Col>
                            <Col md={4}>
                                <card className="featureblock">
                                    <card className="featureblockimg">
                                    <Card.Img src={featureimg3} />
                                        <card className="featureoverlaytxt">
                                        <Card.Img src={featureicon3} />
                                        <h3>Private Transfer</h3> 
                                        </card>    
                                    </card> 
                                    <p>Improved system of borrower's verification. Providing
verification services for other services.</p>   
                                    <a href="#">Read More</a>
                                </card>
                            </Col>
                    </Row>    
            </Container>
        </Container>
    )
}

export default Features;