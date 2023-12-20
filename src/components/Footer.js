import footlogo from "../images/logos/littleLemonfooterLogo.png";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-row">
          <div>
            <img className="footer-logo" height = {'200px'} src={footlogo} alt="Footer Logo" />
          </div>
          <div>
            <h4 id="1">Contact Us!</h4>
            <p id="2">XYZ</p>
            <p id="3">12345678</p>
            <p id="4">abcd@gmail.com</p>
          </div>
        </div>
        <div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
