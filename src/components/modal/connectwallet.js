import React,{ useState, useEffect } from 'react';
import warningicon from '../../assets/image/warningicon.png';
import bluesecue from '../../assets/image/bluesecue.png';
import metamask from '../../assets/image/metamask.png';
import walletconnect from '../../assets/image/walletconnect.png';
import {Modal, Button, Form, Card} from 'react-bootstrap';
import * as constants from "../../blockchain/constants";
import { useWallet } from 'use-wallet';

const ConnectModal = (props) => {
  
  const wallet = useWallet();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (wallet.status === "connected") {
      setError(null);
      if (props.onHide) props.onHide()
    }

    const networkNames = {
      42: "Kovan",
      1: "Ethereum Mainnet"
    }
    if (wallet.error) {
      setError("Try to connect on " + networkNames[constants.chainId] +" network.");
      setTimeout(() => {
        setError("");
      }, 4000);
    }

  }, [props, wallet]);

  const onChangeWallet = (data) => {
    if (data === 'metamask') {
      wallet.connect("injected");
      localStorage.setItem("walletProvider", "metamask");
    } else if (data === 'walletconnect') {
      wallet.connect("walletconnect");
      localStorage.setItem("walletProvider", "walletconnect");
    }
  };
  
  return (
    <Modal {...props} className="connectmodal WalletConnectmodal" animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Connect Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="modalwarning">
          <p>
            <img src={warningicon} className="showondark" alt=""/><img src={bluesecue} alt="" className="showonlight"/>
            You are about to input highly sensitive information, please DO NOT expose to strangers.
          </p>
        </Card>
        {
          error && 
            <div className="error-msg">
              {error}
            </div>
        }
        <Form>
          <Form.Group controlId="formBasicMetamask">
            <Button 
              className="formBasicMetamask"
              style={{ backgroundImage: `url(${metamask})` }} 
              onClick={() => onChangeWallet("metamask")}
            >
              Metamask
            </Button>
          </Form.Group>
          <Form.Group controlId="formBasicWalletconnect">
            <Button 
              className="formBasicWalletconnect" 
              style={{backgroundImage: `url(${walletconnect})`}} 
              onClick={() => onChangeWallet("walletconnect")}
            >
              WalletConnect
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
            
    </Modal>
  )
}

export default ConnectModal;