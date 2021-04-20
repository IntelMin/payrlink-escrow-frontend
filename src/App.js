import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/header/navbar';
import Footer from './components/footer/footer';
import ConnectModal from './components/modal/connectwallet';
import IndexPage from './pages/index';
import DashboardPage from './pages/dashboard.js';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="page-main">
      <NavBar/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        
      </Switch>
      </BrowserRouter>
      <Footer/>
      <ConnectModal/>
    </div>
  );
}

export default App;
