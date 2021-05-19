import React,{useState} from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import singlebannerbg from '../../images/singlebannerbg.png';
import circlewarning from '../../images/circlewarning.png';
import ConnectModal from '../modal/connectwallet';
    export default function SingleBanner(){
        const[status,setStatus]=useState(false);

        return(
            <Container fluid className="single_banner" style={{ backgroundImage: `url(${singlebannerbg})` }}>
                    <Container>
                    <Card className="single_banner_detail">
                    <h2><strong>Welcome to</strong> PayrLink</h2>
                    <p>Expect the innovative Escrow Experience</p>
                    <Button className="connect_wallet_btn" onClick={()=>{
                        setStatus(true)
                    }}>Connect Wallet</Button>
                    <span><img src={circlewarning} alt="Connect Wallet"/>Connect your wallet in  order to use our platform</span>
                    </Card>
                    {status===true?
                    <ConnectModal status={status} setStatus={setStatus}/>
                    :
                    ""
                    }
                    </Container>

            </Container>
        )

    }