import React,{ useState } from 'react';
import warningicon from '../../images/warningicon.png';
import bluesecue from '../../images/bluesecue.png';
import metamask from '../../images/metamask.png';
import walletconnect from '../../images/walletconnect.png';
import {Modal, Button, Form, Card} from 'react-bootstrap';

function ConnectModal(props){
    const [show, setShow] = useState(props.status);

    const handleClose = () => {
        setShow(false);
        props.setStatus(false)
    };
    const CloseMe = () =>{
        localStorage.setItem('loginStatus',true);
        window.location.href='/'
        setShow(false);
    }
    return (
        <>
          
        <Modal show={show} onHide={handleClose} className="connectmodal WalletConnectmodal" animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Connect Wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className="modalwarning">
                <p><img src={warningicon} className="showondark" alt=""/><img src={bluesecue} alt="" className="showonlight"/>You are about to input highly sensitive information, please DO NOT expose to strangers.</p>
                </Card>
                <Form>           
                    <Form.Group controlId="formBasicMetamask">
                        <Button className="formBasicMetamask" style={{ backgroundImage: `url(${metamask})` }}>Metamask</Button>
                    </Form.Group>

                    <Form.Group controlId="formBasicWalletconnect">
                        <Button className="formBasicWalletconnect" style={{backgroundImage: `url(${walletconnect})`}} onClick={CloseMe}>WalletConnect</Button>
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
            
        </Modal>
        </>
    )
}

export default ConnectModal;