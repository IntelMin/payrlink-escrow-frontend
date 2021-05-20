import React from 'react';
import footerlogo from '../../images/footerlogo.png';
import socialicon1 from '../../images/socialicon1.png';
import socialicon2 from '../../images/socialicon2.png';
import socialicon3 from '../../images/socialicon3.png';
import socialicon4 from '../../images/socialicon4.png';
import socialicon5 from '../../images/socialicon5.png';
import {Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem} from 'react-bootstrap';

function Footer(props){
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
                    <Card className="footerlistleft">
                    <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.payrlink.com/Whitepaper.pdf" >WHITEPAPER</a>
                                {/* <LinkContainer to="https://www.payrlink.com/Whitepaper.pdf">
                                    <NavItem target="_blank" eventkey={1}>WHITEPAPER</NavItem>
                                </LinkContainer> */}
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/qC5DbPsap-0" >VIDEO</a>
                                {/* <LinkContainer to="https://youtu.be/qC5DbPsap-0">
                                    <NavItem target="_blank" eventkey={2}>VIDEO</NavItem>
                                </LinkContainer>*/}
                                </ListGroup.Item> 
                            <ListGroup.Item as="li">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.payrlink.com" >OFFICIAL SITE</a>
                                {/* <LinkContainer to="https://www.payrlink.com/">
                                    <NavItem target="_blank" eventkey={3}>OFFICIAL SITE</NavItem>
                                </LinkContainer> */}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup as="ul" className="footersocial">
                        <ListGroup.Item as="li"><a href="https://twitter.com/PayrOfficial" target="_blank" rel="noopener noreferrer"><img src={socialicon1} alt="" /></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="https://t.me/payrlink" target="_blank" rel="noopener noreferrer"><img src={socialicon2} alt="" /></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="https://medium.com/@payrlink_official/" target="_blank" rel="noopener noreferrer"><img src={socialicon3} alt="" /></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="https://youtu.be/qC5DbPsap-0" target="_blank" rel="noopener noreferrer"><img src={socialicon4} alt="" /></a></ListGroup.Item>
                        <ListGroup.Item as="li"><a href="/#" target="_blank" rel="noopener noreferrer"><img src={socialicon5} alt="" /></a></ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Card className="footerlistright">
                    { props.SessionStorage==="true" ?
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <LinkContainer to="/dashboard">
                                    <NavItem eventkey={1}>DASHBOARD</NavItem>
                                </LinkContainer></ListGroup.Item>
                            <ListGroup.Item as="li">
                                <LinkContainer to="/assets">
                                    <NavItem eventkey={1}>ASSETS</NavItem>
                                </LinkContainer>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <LinkContainer to="/staking">
                                    <NavItem eventkey={1}>STAKING</NavItem>
                                </LinkContainer>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <LinkContainer to="/transaction">
                                    <NavItem eventkey={1}>TRANSACTION</NavItem>
                                </LinkContainer>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <LinkContainer to="/#">
                                    <NavItem eventkey={1}>ARBITRATION</NavItem>
                                </LinkContainer>
                            </ListGroup.Item>
                        </ListGroup>
                        :
                        <ListGroup as="ul" >
                            <ListGroup.Item as="li"><a href="/#">HOME</a></ListGroup.Item>
                            <ListGroup.Item as="li"><a href="/#">ARBITRATION</a></ListGroup.Item>
                        </ListGroup>
                    }
                      </Card>  
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="footerblock footerlogo">
                    <Card.Img src={footerlogo} />
                    
                    </Card>
                    </Col>    
                </Row>    
                <Row className="footercopyright">
            <p>Copyright © 2021 PayrLink | All rights reserved.</p>
                    </Row>
            </Container>        
    </Container>

 )
}

export default Footer;