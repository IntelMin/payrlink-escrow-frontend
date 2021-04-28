import React,{ useState } from 'react';
import { Route, RouteHandler } from 'react-router';
import logo from '../../logo.png';
import settingicon from '../../images/settingicon.png';
import downblue from '../../images/downblue.png';
import walleticon from '../../images/walleticon.png';
import notificationicon from '../../images/notificationicon.png';
import {Container, Navbar, Nav, NavItem, Form, FormControl, Button, NavLink, Dropdown, Card} from 'react-bootstrap';
import ConnectModal from '../modal/connectwallet';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'
function NavBar(props){
  const[status,setStatus]=useState(false)
  const[bodyClass, setBodyClass] = useState(false)
  const toggleClass = () =>{
      if(!bodyClass){
        document.body.classList.add('whitebg');
      } else {
        document.body.classList.remove('whitebg');
      }
      setBodyClass(!bodyClass);
  }
  
  const Disconnect=()=>{
    props.setChangeNavBar()
    setStatus(false)
  }
 
    return(
        <Container fluid className="header">
          <Container>
            <Navbar>
              <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
              
              <Navbar.Collapse id="basic-navbar-nav">
              {props.changenavbar===false ?
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#">ARBITRATION</Nav.Link>
                </Nav>
                :
                <Nav className="mr-auto">
                  <LinkContainer to="/dashboard">
                    <Nav.Link eventKey={1}>DASHBOARD</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/assets">
                    <Nav.Link eventKey={1}>ASSETS</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/staking">
                    <Nav.Link eventKey={1}>STAKING</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/transaction">
                    <Nav.Link eventKey={1}>TRANSACTION</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/dashboard">
                    <Nav.Link eventKey={1}>ARBITRATION</Nav.Link>
                  </LinkContainer>
                    {/* <Nav.Link as={Link} href="/dashboard">DASHBOARD</Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                    <Nav.Link href="/assets">ASSETS</Nav.Link>
                    <Nav.Link href="/staking">STAKING</Nav.Link>
                    <Nav.Link href="/transaction">TRANSACTION</Nav.Link>
                    <Nav.Link href="/dashboard">ARBITRATION</Nav.Link> */}
                </Nav>
              }
              </Navbar.Collapse>
              {props.changenavbar===false ?
              <Navbar.Text>
                <a href="#" className={bodyClass? 'header-setting-icon whiteBg': 'header-setting-icon'} onClick={toggleClass}><img src={settingicon}/></a>
           
                <Button className="connect-wallet" onClick={()=>{
                  setStatus(true)
                }}>Connect Wallet</Button>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Navbar.Text>
              :
              <Navbar.Text>
                <a href="#" className="header-setting-icon" ><img src={settingicon}/></a>
                <Dropdown className="header-notification-icon">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <img src={notificationicon}/>
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
    <img src={walleticon}/> 0X13484****79 <img src={downblue}/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={Disconnect} >Disconnect</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Navbar.Text>
              }
             
            </Navbar> 
            {status===true?
            <ConnectModal status={status} setStatus={setStatus} LogInStatus={props.LoginFun}/>
            :
            ""
            }
        </Container>
      </Container>  
    )

}
export default NavBar ;