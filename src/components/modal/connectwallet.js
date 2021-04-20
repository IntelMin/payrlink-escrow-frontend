import React,{ useState } from 'react';
import warningicon from '../../images/warningicon.png';
import metamask from '../../images/metamask.png';
import walletconnect from '../../images/walletconnect.png';
import {Modal, props, Button, Form, Card} from 'react-bootstrap';

function ConnectModal(props){
    const [show, setShow] = useState(props.status);

    const handleClose = () => {
        setShow(false);
        props.setStatus(false)
    };
    const handleShow = () => {
        setShow(true)
        props.setStatus(false)
    };
    
    return (
        <>
          
        <Modal show={show} onHide={handleClose} className="connectmodal">
            <Modal.Header closeButton>
            <Modal.Title>Connect Wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className="modalwarning">
                <p><img src={warningicon}/>You are about to input highly sensitive information, please DO NOT expose to strangers.</p>
                </Card>
            <Form>
                                
                                    <Form.Group controlId="formBasicMetamask">
                                        <Form.Control type="text" placeholder="Metamask" style={{ backgroundImage: `url(${metamask})` }} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicWalletconnect">
                                        <Form.Control type="text" placeholder="WalletConnect" style={{backgroundImage: `url(${walletconnect})`}} />
                                        </Form.Group>
                                    <Card className="modalbutton">
                                    <Button variant="primary" type="submit">
                                    Connect
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                    </Button>   
                                    </Card>
                            </Form>
            </Modal.Body>
            
        </Modal>
        </>
    )
}

export default ConnectModal;