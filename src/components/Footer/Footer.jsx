import "./Footer.scss";
import logo from "../../assets/logo/aquariana-favicon.png";
import instagram from "../../assets/social/instagram.svg";
import whatsapp from "../../assets/social/whatsapp.svg";
import linkedin from "../../assets/social/linkedin.svg";

// eslint-disable-next-line react/prop-types
const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div id="footer_content">
        <div id="footer_contacts">
          <img src={logo} alt="" />
          <div id="footer_social_media">
            <a href="#" className="footer-link" id="instagram">
              <img src={instagram} alt="" />
            </a>
            <a href="#" className="footer-link" id="whatsapp">
              <img src={whatsapp} alt="" />
            </a>
            <a href="#" className="footer-link" id="linkedin">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div id="footer_copyright">Aquariana Corretora & administradora 2023 all rights reserved</div>
    </footer>
  );
};

export default Footer;
