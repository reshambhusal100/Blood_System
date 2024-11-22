import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import css from '../css/Service.css';
import blood_storage from '../images/blood-storage.jpg';
import blood_donation from '../images/blood-donation.jpg';
import red_blood from '../images/red-blood.jpg';
import platelette from '../images/platelette-image.jpg';
import cell_donation from '../images/Cell-donation.jpg';
import Navbar from './Navbar';
 function Service(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
return(
    <>
    <Navbar/>

    <div className='service-heading'>
        <h2>SERVICES</h2>
    
    </div>
    <Carousel responsive={responsive}   itemClass="carousel-item-padding" >
      
  <div className='service-1'>
    <div className='service-2'>
    <img src={blood_storage}width='430px' height='250px' alt='blood-storage'/>
    <div className='service-3'>
    <p className='blood-p'>Blood Storage</p>
    </div>
    <div className='service-4'>
    <p>we store safest blood of all blood groups which can be used for any kind of treatments and emergencies </p>
    </div>
    <div className='service-5'>
    <p><button>Enquire now</button></p>
    </div>
    </div>
  </div>
  <div className='service-1'>
  <div className='service-2'>
    <img src={blood_donation} width='430px' height='250px' alt='blood-donation'/>
    <div className='service-3'>
    <p className='blood-p'>Blood Donation</p>
    </div>
    <div className='service-4'>
    <p>donation of blood is selfless service that we do for mankind we allow you to save a life by donating blood</p>
    </div>
    <div className='service-5'>
    <p><button>Enquire now</button></p>
    </div>
     </div>
  </div>
  <div className='service-1'>
  <div className='service-2'>
<img src={red_blood}  width='430px' height='250px' alt='red-blood'/>
<div className='service-3'>
<p className='blood-p'>provision of RBC</p>
</div>
<div className='service-4'>
    <p>
Lowering the count of red blood cells could be dangerous. We also provide red blood cells for various treatments.</p>
</div>
<div className='service-5'>
    <p><button>Enquire now</button></p>
    </div>
    </div>
  </div>
  <div className='service-1'>
  <div className='service-2'>
    <img src={platelette} width='430px' height='250px' alt='platelette'/>
    <div className='service-3'>
    <p className='blood-p'>Platelet service</p>
    </div>
    <div className='service-4'>
    <p>play crucial role in blocking bleeding during imjuries. We provide platelets to maintain its count in your blood.
</p></div>
<div className='service-5'>
    <p><button>Enquire now</button></p>
    </div>
    </div>
  </div>
  <div className='service-1'>
  <div className='service-2'>
<img src={cell_donation}  width='430px' height='250px'alt='cell'/>
<div className='service-3'>
<p className='blood-p'>provision of stem cells</p>
</div>
<div className='service-4'>
    <p>donation of stem cells is selfless service that we do for mankind</p>
    </div>
    <div className='service-5'>
    <p><button>Enquire now</button></p>
    </div>
    </div>
  </div>
</Carousel>
    </>

);
}
export default Service;