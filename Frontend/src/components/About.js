import css from '../css/About.css';
import Navbar from './Navbar';
import About_image from '../images/aboutus.png';
import mission from '../images/about-1.jpeg';
import mission_image from '../images/about-2.jpeg'
import vision from '../images/about-3.jpeg';
import vision_img from '../images/about-4.jpeg';
import "@fontsource/barlow";

function About(){
    return(
        <>
        <Navbar/>
        <div className='about-us'>
            <div className='about-us-1'>
        <div className='about-text'>
            <p><b>ABOUT US</b></p>
            <p>We are committed to upholding the highest standards of quality and safety in every aspect of our operations. From donor recruitment and screening to blood collection, testing,
                 and distribution, we adhere to strict protocols and regulations set forth by regulatory authorities.</p><br/>
                 <p>Behind our success is a dedicated team of healthcare professionals, volunteers, and supporters who work tirelessly to fulfill
                     our mission. With their expertise, passion, and commitment, we continue to make a positive difference in the lives of patients,their families who depend on our services during critical times.</p><br/>
                     <p>we have made a significant impact on our community by providing life-saving blood products to hospitals and healthcare facilities. Through our partnerships with medical institutions, blood drives, and awareness campaigns.</p>
        </div>
        <div className='about-us-3'>
            <img src={About_image} className='about-img'alt='about'/>
        </div>
    </div>
        </div>
        <div className='about-mission'>
            <div className='about-mission-1'>
                <p><b>OUR MISSION</b></p>
                <br/>
                <p>Our mission is to save lives by providing a safe, reliable, and readily available supply 
                    of blood products to healthcare facilities and patients in need. We are committed to upholding the highest standards of quality, safety, and efficiency in every aspect of our operations. Through our dedication to excellence,
                    we aim to make a positive impact on the health and well-being of our community.</p>
            </div>
            <div className='about-mission-image'>
                <img src={mission} alt='mision'/>
                <img src={mission_image} alt='mision'/>
            </div>
        </div>
        <div className='about-vision'>
            <div className='vision-1'>
            <p><b>OUR VISION</b></p><br/>
            <p>Our vision is to be the leading provider of blood and blood products, known for our unwavering commitment to excellence, 
                innovation, and service. We envision a future where every individual has access to the lifesaving blood they need, regardless of their location or circumstance. By continually striving to improve and innovate, we aspire to meet the evolving needs of healthcare 
                providers and patients, ensuring a healthier and safer future for all.</p>
            </div>
            <div className='vision-2'>
              <img src={vision} alt='vision'/>  
              <img src={vision_img} alt='vision'/> 
            </div>
        </div>
        </>
    );
}
export default About;