import '../css/Footer.css';
function Footer(){
    return(
    <>
<footer className="footer">
<div className="row">
  <a href="#"><i className="fa fa-facebook"></i></a>
  <a href="#"><i className="fa fa-instagram"></i></a>
  <a href="#"><i className="fa fa-whatsapp"></i></a>
  <a href="#"><i className="fa fa-twitter"></i></a>
</div>

<div className="row">
  <ul>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Our Services</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms & Conditions</a></li>
  </ul>
</div>

<div className="row">
  Copyright © 2024 BloodBank - All rights reserved ||
</div>
</footer>
</>
    )
}
export default Footer;