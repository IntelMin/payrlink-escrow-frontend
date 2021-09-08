import React,{ useState } from 'react';
import logo from '../../logo.png';
import settingicon from '../../assets/image/settingicon.png';
import downblue from '../../assets/image/downblue.png';
import walleticon from '../../assets/image/walleticon.png';
import notificationicon from '../../assets/image/notificationicon.png';
import {Container, Navbar, Nav, Dropdown, Card, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import ConnectModal from '../modal/ConnectWallet';
import * as utils from '../../blockchain/utils';
import usePayr from '../../hooks/usePayr';

const MainNavbar = (props) => {

  const [modalShow, setModalShow] = useState(false);
  const {account} = useWallet();
  const payr = usePayr();

  const handleDisconnect = () => {
    payr.disconnect();
  };

  return(
    <Container fluid className="header">
      <Container>
        <Navbar>
          <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {
                account &&
                  <>
                    <NavLink className="nav-link" to="/dashboard">DASHBOARD</NavLink>
                    <NavLink className="nav-link" to="/assets">ASSETS</NavLink>
                    <NavLink className="nav-link" to="/staking">STAKING</NavLink>
                    <NavLink className="nav-link" to="/transaction">TRANSACTION</NavLink>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
            {
              !account ? 
                <Button className="connect-wallet" onClick={() => setModalShow(true)}>
                  Connect Wallet
                </Button>
              :
                <>
                  <span className={props.bodyClass? 'header-setting-icon whiteBg': 'header-setting-icon'} onClick={props.toggleClass} >
                    <img src={settingicon} alt="" />
                  </span>
                  <NotificationDropdown/>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="connect-wallet">
                      <img src={walleticon} alt="" /> 
                      &nbsp;{utils.formatAddress(account)}&nbsp;
                      <img src={downblue} alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href={'/'} onClick={handleDisconnect}>Disconnect</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </>
            }            
          </Navbar.Text>
        </Navbar>
        <ConnectModal show={modalShow} onHide={() => setModalShow(false)}/>
      </Container>
    </Container>  
  )

}

const NotificationDropdown = () => {
  return (
    <Dropdown className="header-notification-icon">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src={notificationicon} alt="" />
        <span className="notification_dot"></span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <h2>Notifications</h2>
        <Card>
          <Dropdown.Item href="#/action-1" className="unread">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="unread">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
          <Dropdown.Item href="#/action-3">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
          <Dropdown.Item href="#/action-2">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
          <Dropdown.Item href="#/action-3">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
          <Dropdown.Item href="#/action-3">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
          <Dropdown.Item href="#/action-2">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
          <Dropdown.Item href="#/action-3">Received <strong>20 ETH</strong> from <strong>XeroNeon</strong> on <span>03/18/2021</span> at <span>2:30AM</span></Dropdown.Item>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default MainNavbar ;