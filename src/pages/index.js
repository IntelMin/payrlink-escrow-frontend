import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner/home-banner';
import About from '../components/home/about';
import Features from '../components/home/features';
import SimpleSlider from '../components/home/testimonial';
import ConnectModal from '../components/modal/connectwallet';
import NavBar from '../components/header/navbar';
import Footer from '../components/footer/footer';

function IndexPage() {
  return (
    <div className="page-main">
      <NavBar/>
      <Banner/>
      <About/>
      <Features/>
      <SimpleSlider/>
      <Footer/>
      <ConnectModal/>
    </div>
  );
}

export default IndexPage;
