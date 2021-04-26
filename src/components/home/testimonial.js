import React, { Component } from "react";
import Slider from "react-slick";
import authoricon from '../../images/authoricon.png';
import testimonialbg from '../../images/testimonialbg.png';
import {Container, Col, Card, Row} from 'react-bootstrap';
/* Anil Test */

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
      slidesToScroll: 1
          }
        }
    ]
    };
    
    return (
      <Container fluid className="testimonial-main" style={{ backgroundImage: `url(${testimonialbg})` }}>
        <Container>
        <h2>Testimonials</h2>
        
      
        <Slider {...settings}>
          <Col>
          <Card className="testimonial-top">
                         <img src={authoricon}/>
                         <span>
                         <h3>Tarun Thusu</h3> 
                         <h5>verified user</h5>
                         </span>
                         </Card>      
                         <p>This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user.</p>
          
          </Col>
          <Col>
          <Card className="testimonial-top">
                         <img src={authoricon}/>
                         <span>
                         <h3>Tarun Thusu</h3> 
                         <h5>verified user</h5>
                         </span>
                         </Card>      
                         <p>This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user.</p>
          
          </Col>
          <Col>
          <Card className="testimonial-top">
                         <img src={authoricon}/>
                         <span>
                         <h3>Tarun Thusu</h3> 
                         <h5>verified user</h5>
                         </span>
                         </Card>      
                         <p>This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user.</p>
          
          </Col>
          <Col>
          <Card className="testimonial-top">
                         <img src={authoricon}/>
                         <span>
                         <h3>Tarun Thusu</h3> 
                         <h5>verified user</h5>
                         </span>
                         </Card>      
                         <p>This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user.</p>
          
          </Col>
          <Col>
          <Card className="testimonial-top">
                         <img src={authoricon}/>
                         <span>
                         <h3>Tarun Thusu</h3> 
                         <h5>verified user</h5>
                         </span>
                         </Card>      
                         <p>This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user. This website is sleek and easy to use for any new user.</p>
          
          </Col>
        </Slider>
        </Container>
      </Container>
    );
  }
}