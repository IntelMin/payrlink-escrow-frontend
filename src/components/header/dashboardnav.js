import React,{ useState, useEffect } from 'react';
import logo from '../../logo.png';
import settingicon from '../../images/settingicon.png';
import downblue from '../../images/downblue.png';
import walleticon from '../../images/walleticon.png';
import notificationicon from '../../images/notificationicon.png';
import {Container, Navbar, Nav, Dropdown, Card} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function DashBoardNavBar(props){
  // const[status,setStatus]=useState(false);
   const[bodyClass, setBodyClass] = useState(false);
  // const toggleClass = () =>{
  //     if(!bodyClass){
  //       document.body.classList.add('whitebg');
  //     } else {
  //       document.body.classList.remove('whitebg');
  //     }
  //     setBodyClass(!bodyClass);
  // }
  useEffect(()=>{
    setBodyClass(false);
  }, [])
  const Disconnect=()=>{
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('changeTheme');
    window.location.href='/';
  }
    return(
        <Container fluid className="header">
          <Container>
            <Navbar>
              <Navbar.Brand ><img src={logo} onClick={Disconnect} alt="" /></Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
            
                <Nav className="mr-auto">
                  <LinkContainer to="/dashboard">
                    <Nav.Link eventkey={1}>DASHBOARD</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/assets">
                    <Nav.Link eventkey={2}>ASSETS</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/staking">
                    <Nav.Link eventkey={3}>STAKING</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/transaction">
                    <Nav.Link eventkey={4}>TRANSACTION</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/dashboard">
                    <Nav.Link eventkey={5}>ARBITRATION</Nav.Link>
                  </LinkContainer>
                    
                </Nav>
              </Navbar.Collapse>
              <Navbar.Text>
                <span className={bodyClass? 'header-setting-icon whiteBg': 'header-setting-icon'} onClick={props.toggleClass} ><img src={settingicon} alt="" /></span>
                <Dropdown className="header-notification-icon">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={notificationicon} alt="" /> <span className="notification_dot"></span>
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
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="connect-wallet">
                <img src={walleticon} alt="" /> 0X13484****79 <img src={downblue} alt="" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={'/'} onClick={Disconnect} >Disconnect</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Navbar.Text>
             
            </Navbar> 
            {/* {status===true?
            <ConnectModal status={status} setStatus={setStatus} LogInStatus={props.LoginFun}/>
            :
            ""
            } */}
        </Container>
      </Container>  
    )

}
export default DashBoardNavBar ;