import React,{useState} from 'react'
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
  return (
    <div className="page-main">
      <React.StrictMode>
       <Router>
         {SessionStorage === "true"?<DashBoardNavBar/> : <NavBar/>}
        <Switch>
          {/* component={SessionStorage==="true" ? DashboardPage : IndexPage} */}
          <Route exact path="/"  render={()=><IndexPage SessionStorage={SessionStorage}/> }/>
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
