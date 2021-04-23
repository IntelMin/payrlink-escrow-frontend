import React,{ useState } from 'react';
import logo from '../../logo.png';
import settingicon from '../../images/settingicon.png'
import {Container, Navbar, Nav,  Form, FormControl, Button} from 'react-bootstrap';
import ConnectModal from '../modal/connectwallet'

function NavBar(){
  const[changenavbar,setChangeNavBar]=useState(false)
  const LoginFun=()=>{
    setChangeNavBar(true)
  }
  const[status,setStatus]=useState(false)
    return(
        <Container fluid className="header">
          <Container>
            <Navbar>
              <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              {changenavbar===false ?
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/dashboard">ARBITRATION</Nav.Link>
                </Nav>
                :
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
                    <Nav.Link href="/assets">ASSETS</Nav.Link>
                    <Nav.Link href="/stacking">STAKING</Nav.Link>
                    <Nav.Link href="#home">TRANSACTION</Nav.Link>
                    <Nav.Link href="/dashboard">ARBITRATION</Nav.Link>
                </Nav>
              }
              </Navbar.Collapse>
              <Navbar.Text>
                <a href="#" className="header-setting-icon" ><img src={settingicon}/></a>
                <Button className="connect-wallet" onClick={()=>{
                  setStatus(true)
                }}>Connect Wallet</Button>
              </Navbar.Text>
            </Navbar> 
            {status===true?
            <ConnectModal status={status} setStatus={setStatus} LogInStatus={LoginFun}/>
            :
            ""
            }
        </Container>
      </Container>  
    )

}
export default NavBar ;