import React,{ useState } from 'react';
import warningicon from '../../images/warningicon.png';
import metamask from '../../images/metamask.png';
import walletconnect from '../../images/walletconnect.png';
import {Modal, props, Button, Form, Card} from 'react-bootstrap';

function CreateNew(props){
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
                                        <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                        <Form.Control type="text" />
                                         </Form.Group>

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