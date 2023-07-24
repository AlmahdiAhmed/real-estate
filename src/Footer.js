import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="section footer" id="contact">
      <div className="footer-container">
        <div className="container">
          <h2>Company</h2>
          <hr />
          <div className="links">
            <div className="link">About Us</div>
            <div className="link">Our Services</div>
            <div className="link">Privacy Policy</div>
          </div>
        </div>
        <div className="container">
          <h2>Get Help</h2>
          <hr />
          <div className="links">
            <div className="link">FAQ</div>
            <div className="link">Returns</div>
            <div className="link">Payment Options</div>
          </div>
        </div>
        <div className="container">
          <h2>Follow Us</h2>
          <hr />
          <div className="links social">
            <div className="link">
              <FaFacebook />
            </div>
            <div className="link">
              <BsTwitter />
            </div>
            <div className="link">
              <AiOutlineInstagram />
            </div>
            <div className="link">
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
