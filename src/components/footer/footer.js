import React from 'react';
import footerlogo from '../../assets/image/footerlogo.png';
import socialicon1 from '../../assets/image/socialicon1.png';
import socialicon2 from '../../assets/image/socialicon2.png';
import socialicon3 from '../../assets/image/socialicon3.png';
import socialicon4 from '../../assets/image/socialicon4.png';
import socialicon5 from '../../assets/image/socialicon5.png';
import {Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useWallet } from 'use-wallet';

function Footer(props){  
  const {account} = useWallet();
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
                    <Form.Control type="text" placeholder="Title" />
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
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/qC5DbPsap-0" >VIDEO</a>
                  </ListGroup.Item> 
                  <ListGroup.Item as="li">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.payrlink.com" >OFFICIAL SITE</a>
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
                { account ?
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">
                      <NavLink className="nav-link" to="/dashboard">DASHBOARD</NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <NavLink className="nav-link" to="/assets">ASSETS</NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <NavLink className="nav-link" to="/staking">STAKING</NavLink>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <NavLink className="nav-link" to="/transaction">TRANSACTION</NavLink>
                    </ListGroup.Item>
                  </ListGroup>
                  :
                  <ListGroup as="ul" >
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