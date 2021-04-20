import React,{ useState } from 'react';
import logo from '../../logo.png';
import settingicon from '../../images/settingicon.png'
import {Container, Navbar, Nav,  Form, FormControl, Button} from 'react-bootstrap';
import ConnectModal from '../modal/connectwallet'
function NavBar(){
  const[status,setStatus]=useState(false)
    return(
        <Container fluid className="header">
          <Container>
            <Navbar>
              <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">ARBITRATION</Nav.Link> 
                </Nav>
              </Navbar.Collapse>
              <Navbar.Text>
                <a href="#" className="header-setting-icon" ><img src={settingicon}/></a>
                <Button className="connect-wallet" onClick={()=>{
                  setStatus(true)
                }}>Connect Wallet</Button>
              </Navbar.Text>
            </Navbar> 
            {status===true?
            <ConnectModal status={status} setStatus={setStatus}/>
            :
            ""
            }
        </Container>
      </Container>  
    )

}
export default NavBar;