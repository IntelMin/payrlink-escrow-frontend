import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner/home-banner';
import About from '../components/home/about';
import Features from '../components/home/features';
import SimpleSlider from '../components/home/testimonial';
import ConnectModal from '../components/modal/connectwallet';
import Footer from '../components/footer/footer';
import SingleBanner from '../components/banner/singlebanner';

function IndexPage(props) {
  
  return (
    <div className="page-main">
      {props.SessionStorage==="true"?
      <Banner/>
      :
      <SingleBanner/>
      }
    </div>
  );
}

export default IndexPage;
