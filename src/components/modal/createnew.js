import React,{ useRef, useState } from 'react';
import {Modal, Button, Form, Card, Table} from 'react-bootstrap';
import depositbg from '../../assets/image/depositbg.png';
import PoolSelect from '../common/PoolSelect';
import { pools } from '../../blockchain/constants';
import {NotificationManager} from 'react-notifications';
import * as commHelper from '../../helpers/common';
import * as utils from '../../blockchain/utils';
import usePayr from '../../hooks/usePayr';
import useAssets from '../../hooks/useAssets';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  to: yup.string().required("Recipient address is required"),
  amount: yup.number().typeError('Amount must be a number').positive('Amount must be greater than zero').required("Amount is required"),
});

const CreateModal = (props) => {

  const payr = usePayr();
  const assets = useAssets();
  const amountInput = useRef(null);
  const options = commHelper.generatePoolSelectOptions();
  const [poolId, setPoolId] = useState(options[0].value);
  const [requestedCreate, setRequestedCreate] = useState(false);

  const handleClose = () => {
    if (props.onHide) props.onHide();
  };
  
  const handlePoolChange = (id) => {
    setPoolId(id);
  }

  const handleMaxValue = (setValues) => {
    setValues(values => ({...values, amount: Number(commHelper.toFixed(assets[poolId].balance, false))}));
  }

  const handleCreate = async (values) => {
    const { to, amount, title } = values;
    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
      NotificationManager.error('Invalid amount');
      return;
    }
    if (Number(amount) > Number(assets[poolId].balance)) {
      NotificationManager.error('Insufficient balance');
      return;
    }
    setRequestedCreate(true);
    const txHash = await payr.createEscrow(poolId, to, amount, title);
    setRequestedCreate(false);
    if (!txHash) {
      NotificationManager.error('Creation Error');
      return;
    }
    if (props.onHide) props.onHide();
    const msg = amount + " " + pools[poolId].symbol + " to " + utils.formatAddress(to);
    NotificationManager.success(msg, 'Escrow is Created successfully.');
  }

  const disabled = requestedCreate || !assets;
  return (
    <>
          
    <Modal show={props.show} onHide={() => {}} className="connectmodal create_new_modal">
      <Modal.Header closeButton>
      <Modal.Title>Create an Escrow</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik
        validationSchema={schema}
        onSubmit={handleCreate}
        initialValues={{
          title: '',
          to: '',
          amount: 0,
        }}
      >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        setValues,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form>      
          <Form.Group controlId="Name">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disabled}
            />
          </Form.Group>
          {errors.title && touched.title ? (
             <div className="form-valid-error" >{errors.title}</div>
           ) : null}
                                  
          <Form.Group controlId="To">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="text"
              name="to"
              value={values.to}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disabled}
            />
          </Form.Group>
          {errors.to && touched.to ? (
             <div className="form-valid-error" >{errors.to}</div>
           ) : null}

          <Form.Group controlId="Amount">
            <Form.Label>Amount</Form.Label>
            <PoolSelect className="self-width" onChange={handlePoolChange} />
            <Form.Control 
              className="text-right amount-input ml-3"
              ref={amountInput}
              type="text"
              name="amount"
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disabled}
              autoComplete="off"
            />
          </Form.Group>
          {
            assets &&
              <span className={"max_value " + (disabled?"disable-click":"")} onClick={disabled?null:(() => handleMaxValue(setValues))}>
                Max: {commHelper.toFixed(assets[poolId].balance)}
              </span>
          }
          {errors.amount && touched.amount ? (
             <div className="form-valid-error" >{errors.amount}</div>
           ) : null}
          <Card className="deposit_bottom" style={{ backgroundImage: `url(${depositbg})` }}>
            <Table>
              <tbody>
                <tr>
                <td>Current Balance</td>
                <td>
                  { assets && <strong>{commHelper.toFixed(assets[poolId].balance)} {pools[poolId].symbol}</strong> }                
                </td>
                </tr>
                <tr>
                <td>Remaining Balance</td>
                <td>
                  { assets && <strong>{commHelper.toFixed(assets[poolId].balance - (isNaN(values.amount)?0:Number(values.amount)))} {pools[poolId].symbol}</strong> }
                </td>
                </tr>
              </tbody>
            </Table>
            <Card className="modalbutton">
              {
                requestedCreate?
                  <Button variant="primary" disabled>
                    Creating...
                  </Button>
                :
                  <Button variant="primary" onClick={handleSubmit}>
                    Create
                  </Button>
              }
              <Button variant="secondary" onClick={handleClose} disabled={disabled} >
                Close
              </Button>
            </Card>
          </Card>
        </Form>
      )}
      </Formik>
    </Modal.Body>
            
    </Modal>
    </>
  )
}

export default CreateModal;