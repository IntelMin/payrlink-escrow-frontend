import React from 'react';
import bannerbg from '../../images/bannerbg.png';
import bannericon from '../../images/bannericon.png';
import {Container, Col, Carousel} from 'react-bootstrap';

function Banner(){
    return(
        <Container fluid className="banner-main">
            <Col className="banner-image">
               <img src={bannerbg}/>
           </Col> 
           <Col className="banner-slider">
              <Container>
              <Carousel>
                    <Carousel.Item>
                       <Carousel.Caption>
                         <img src={bannericon}/>  
                        <h3>Welcome to <i>PayrLink</i></h3>
                        <p>Expect the innovative Escrow Experience</p>
                        <a href="#">WHITEPAPER</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <Carousel.Caption>
                         <img src={bannericon}/>     
                         <h3>Welcome to <i>PayrLink</i></h3>
                        <p>Expect the innovative Escrow Experience</p>
                        <a href="#">WHITEPAPER</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <Carousel.Caption>
                         <img src={bannericon}/>     
                         <h3>Welcome to <i>PayrLink</i></h3>
                        <p>Expect the innovative Escrow Experience</p>
                        <a href="#">WHITEPAPER</a>
                        </Carousel.Caption>
                    </Carousel.Item>
             </Carousel>
             </Container>
           </Col>    
        </Container>
    )

}

export default Banner;