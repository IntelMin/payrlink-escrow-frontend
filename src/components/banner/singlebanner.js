import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import singlebannerbg from '../../images/singlebannerbg.png';
import circlewarning from '../../images/circlewarning.png';

    export default function SingleBanner(){
        return(
            <Container fluid className="single_banner" style={{ backgroundImage: `url(${singlebannerbg})` }}>
                    <Container>
                    <Card className="single_banner_detail">
                    <h2><strong>Welcome to</strong> PayrLink</h2>
                    <p>Expect the innovative Escrow Experience</p>
                    <Button className="connect_wallet_btn" >Connect Wallet</Button>
                <span><img src={circlewarning}/>Connect your wallet in  order to use our platform</span>
                    </Card>
                    </Container>

            </Container>
        )

    }