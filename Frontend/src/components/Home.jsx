import '../css/Home.css';
import Contact from './Contact';
import Donate from './Donate';
import Navbar from './Navbar';
import images from "./images";
import Service from './Service';
import About from './About';
import CustomSlider from "./custom.slider";
function Home(){
    return(
        <>
      <Navbar/>
        {/* <div className="home">
            <div className='home-text'>
<p id='home-font'>Your Health is our priority</p> 
</div>
<div className='home-button'>
  <button  className="home-button-1" onClick={Service}>Explore NOw</button>
</div>
        </div> */}
        <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
        <div id="abt">
        <About/>
        </div>
      <Donate/>
        <Service/>
        <Contact/>
        </>
    );
}
export default Home;



