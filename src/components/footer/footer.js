import React from 'react';
import logo from '../../logo.png';
import socialicon1 from '../../images/socialicon1.png';
import socialicon2 from '../../images/socialicon2.png';
import socialicon3 from '../../images/socialicon3.png';
import socialicon4 from '../../images/socialicon4.png';
import socialicon5 from '../../images/socialicon5.png';
import {Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';

function Footer(){
 return(
    <Container fluid className="footermain">
            <Container>
                <Row>
                    <Col md={4}>
                    <Card className="footerblock">
                            <Form>
                                <h3>Contact Us</h3>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    
                                    <Form.Group controlId="exampleForm.formBasicTextarea">
                                    <Form.Control as="textarea"  placeholder="Message" rows={3} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                            </Form>
                    </Card>    
                    </Col>
                    <Col md={4}>
                    <Card className="footerblock footerlist">
                    <ListGroup as="ul" className="footerborderight">
                        <ListGroup.Item as="li"><a href="#">HOME</a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="#">ARBITRATION</a></ListGroup.Item>
                        </ListGroup>
                        <ListGroup as="ul">
                        <ListGroup.Item as="li"><a href="#">OFFICIAL SITE</a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="#">WHITEPAPER</a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="#">VIDEO</a></ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="footerblock footerlogo">
                    <Card.Img src={logo} />
                    <ListGroup as="ul">
                        <ListGroup.Item as="li"><a href="#"><img src={socialicon1}/></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="#"><img src={socialicon2}/></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="#"><img src={socialicon3}/></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="#"><img src={socialicon4}/></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="#"><img src={socialicon5}/></a></ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </Col>    
                </Row>    
                <Row className="footercopyright">
            <p>Copyright © 2021 designed by Tarun Thusu  |  All rights reserved.</p>
                    </Row>
            </Container>        
    </Container>

 )
}

export default Footer;