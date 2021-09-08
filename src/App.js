import React,{useEffect, useState} from 'react'
import {NotificationContainer} from 'react-notifications';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DashboardPage from './pages/dashboard.js';
import StakingPage from './pages/staking';
import Transaction from './pages/transaction.js'
import AssetsPage from './pages/assets';
import WelcomePage from './pages/welcome';
import NotFoundPage from './pages/notfound';
import MainNavbar from './components/header/mainnav'
import { makeStyles } from '@material-ui/core/styles';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/Favorite';
import MdClose from '@material-ui/icons/Clear';
import MdEscrow from '@material-ui/icons/AccountBalanceWallet';
import MdArbitration from '@material-ui/icons/AccountBalance';
import PayrProvider from './contexts/PayrProvider';
import ConfirmDialogProvider from './contexts/ConfirmDialogProvider';
import * as utils from './blockchain/utils';
import { useWallet, UseWalletProvider } from 'use-wallet';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabText: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(10),
  },
}));

const PureApp = () => {
  const classes = useStyles();
  const {account} = useWallet();
  const [opened, setOpened] = useState(false);
  const [bodyClass, setBodyClass] = useState(false);

  const theme = localStorage.getItem('uitheme')

  useEffect(() => {
    if (theme === "true") {
      document.body.classList.add('whitebg')
    } else {
      document.body.classList.remove('whitebg')
    }
  }, [theme])

  const toggleClass = () => {
    if(!bodyClass){
      localStorage.setItem('uitheme', true);
      document.body.classList.add('whitebg');
    } else {
      localStorage.removeItem('uitheme');
      document.body.classList.remove('whitebg');
    }
    setBodyClass(!bodyClass)
  }

  return (
    <div>
      <React.StrictMode>
        <Router>
          <MainNavbar bodyClass={bodyClass} toggleClass={toggleClass}/>
          <div className="main-content">
            <Switch>
              {
                !account ? 
                  <Route exact path="/"  component={WelcomePage}/>
                :
                  <>
                    <Redirect exact path="/" to="/dashboard" />
                    <Route exact path="/dashboard" component={DashboardPage} />
                    <Route exact path="/staking" component={StakingPage} />
                    <Route exact path="/transaction" component={Transaction} />
                    <Route exact path="/assets" component={AssetsPage} />
                  </>
              }
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer/>
        </Router>
      </React.StrictMode>
      
      <NotificationContainer/>
      <FloatingMenu
        className={classes.fab}
        slideSpeed={500}
        direction="up"
        spacing={8}
        isOpen={opened}
      >
        <MainButton
          iconResting={<MdAdd style={{ fontSize: 20, color: 'white' }} />}
          iconActive={<MdClose style={{ fontSize: 20, color: 'white' }} />}
          background="#3f3c73"
          onClick={() => setOpened(!opened)}
          size={56}
          variant="extended"
        >
        </MainButton>
        <ChildButton
          icon={<MdArbitration style={{ fontSize: 20, color: 'white' }} />}
          background="#25224E"
          size={40}
          onClick={() => window.open("https://xd.adobe.com/view/942aede7-14d0-4e41-80c4-b5236d4befed-c179", "_blank")}
        />
        <ChildButton
          icon={<MdEscrow style={{ fontSize: 20, color: 'white' }} />}
          background="#25224E"
          size={40}
          onClick={() => window.open("https://xd.adobe.com/view/b477dd9c-6ee6-45a5-aa58-22ee6992a82e-e124", "_blank")}
        />
      </FloatingMenu>
      <div className={classes.fabText + " fabtext-theme"}>MVP Designs</div>
    </div>
  );
}

const Providers = ({ children }) => {

  const {
    chainId,
    rpcUrl
  } = utils.getEthChainInfo();

  return (
    <UseWalletProvider
      chainId={chainId}
      connectors={{
        walletconnect: { rpcUrl }
      }}
    >
      <PayrProvider>
        <ConfirmDialogProvider>
          {children}
        </ConfirmDialogProvider>
      </PayrProvider>
    </UseWalletProvider>
  )
}

const App = () => {
  return (
    <Providers>
      <PureApp />
    </Providers>
  );
}

export default App;
