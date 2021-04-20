import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/banner/home-banner';
import About from '../components/home/about';
import Features from '../components/home/features';
import SimpleSlider from '../components/home/testimonial';
import ConnectModal from '../components/modal/connectwallet';


function IndexPage() {
  return (
    <div className="page-main">
      <Banner/>
      <About/>
      <Features/>
      <SimpleSlider/>
    </div>
  );
}

export default IndexPage;
