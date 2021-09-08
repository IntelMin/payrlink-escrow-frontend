import React,{useState} from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import welcomebg from '../assets/image/singlebannerbg.png';
import circlewarning from '../assets/image/circlewarning.png';
import ConnectModal from '../components/modal/ConnectWallet';

const Welcome = (props) => {

  const [modalShow, setModalShow] = useState(false);
  return(
    <Container fluid className="welcome" style={{ backgroundImage: `url(${welcomebg})` }}>
      <Card className="welcome_detail">
        <h2><strong>Welcome to</strong> PayrLink</h2>
        <p>Expect the innovative Escrow Experience</p>
        <Button className="connect_wallet_btn" onClick={() => setModalShow(true)}>Connect Wallet</Button>
        <span><img src={circlewarning} alt="Connect Wallet"/>Connect your wallet in  order to use our platform</span>
      </Card>
      <ConnectModal show={modalShow} onHide={() => setModalShow(false)}/>
    </Container>
  )

}

export default Welcome