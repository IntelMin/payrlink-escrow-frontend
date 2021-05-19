import React,{ useState } from 'react';
import downwhite from '../../images/downwhite.png';
import {Modal, Button, Form, Card} from 'react-bootstrap';

function CreateNew(props){
    const [show, setShow] = useState(props.status);

    const handleClose = () => {
        setShow(false);
        props.setStatus(false)
    };
    
    return (
        <>
          
        <Modal show={show} onHide={handleClose} className="connectmodal create_new_modal">
            <Modal.Header closeButton>
            <Modal.Title>Create New</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            <Form>
                                
                                    <Form.Group controlId="Name">
                                    <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" />
                                        </Form.Group>
                                        
                                        <Form.Group controlId="To">
                                        <Form.Label>To</Form.Label>
                                        <Form.Control type="text" />
                                        
                                        </Form.Group>

                                        <Form.Group controlId="Amount">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control as="select" style={{ backgroundImage: `url(${downwhite})` }}>
                                        <option>ETH</option>
                                        <option>USDT</option>
                                        <option>PAYR</option>
                                        <option>BTC</option>
                                        </Form.Control>
                                        <Form.Control type="text" />
                                        </Form.Group>
                                        <span className="max_value">Max: 2.2 ETH</span>
                                    <Card className="modalbutton">
                                    <Button variant="primary" type="submit">
                                    Confirm
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                    Close
                                    </Button>   
                                    </Card>
                            </Form>
            </Modal.Body>
            
        </Modal>
        </>
    )
}

export default CreateNew;