import React,{useEffect, useState} from 'react'
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/header/navbar';
import Footer from './components/footer/footer';
import ConnectModal from './components/modal/connectwallet';
import IndexPage from './pages/index';
import DashboardPage from './pages/dashboard.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StakingPage from './pages/staking';
import Transaction from './pages/transaction.js'
import AssetsPage from './pages/assets';
import DashBoardNavBar from './components/header/dashboardnav'
function App() {
  const SessionStorage=localStorage.getItem('loginStatus')
  const SessionStorageTheme=localStorage.getItem('changeTheme')
  const[bodyClass, setBodyClass] = useState(false);
  // Change Theame
  const toggleClass = () =>{
      if(!bodyClass){
        localStorage.setItem('changeTheme', true);
        document.body.classList.add('whitebg');
      } else {
        localStorage.removeItem('changeTheme');
        document.body.classList.remove('whitebg');
      }
      setBodyClass(!bodyClass);
  }
  useEffect(()=>{
    {SessionStorageTheme === "true"? document.body.classList.add('whitebg'): document.body.classList.remove('whitebg')}
  },[])
  return (
    <div className="page-main">
      <React.StrictMode>
       <Router>
         {SessionStorage === "true"?<DashBoardNavBar bodyClass={bodyClass} toggleClass={toggleClass}/> : <NavBar toggleClass={toggleClass} bodyClass={bodyClass}/>}
        <Switch>
          {/* component={SessionStorage==="true" ? DashboardPage : IndexPage} */}
          <Route exact path="/"  component={SessionStorage==='true'? DashboardPage : IndexPage}/>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/staking" component={StakingPage} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/assets" component={AssetsPage} />
        </Switch>
        <Footer SessionStorage={SessionStorage}/>
       </Router>
      </React.StrictMode>
      
      <ConnectModal/>
    </div>
  );
}

export default App;
