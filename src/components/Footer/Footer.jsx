import "./Footer.scss";
import logo from "../../assets/logo/aquariana-favicon.png";
import instagram from "../../assets/social/instagram.png";
import whatsapp from "../../assets/social/whatsapp-2.png";
import linkedin from "../../assets/social/linkedin.png";

// eslint-disable-next-line react/prop-types
const Footer = ({ className }) => {
  return (
    <footer className={className}>
      {/* <div>
        <div className="footer_content">
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.0459099727148!2d-43.95324529625138!3d-19.93476561268421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6977aac247b2f%3A0xc57b2926f5703c86!2sAv.%20Raja%20Gab%C3%A1glia%2C%2070%20-%20Cidade%20Jardim%2C%20Belo%20Horizonte%20-%20MG%2C%2030110-051!5e0!3m2!1spt-BR!2sbr!4v1690340689599!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            rel="noopener noreferrer"
          ></iframe>
        </div>
      </div> */}

      <div className="footer_copyright">
        <div className="social_midia">
          <a href="" className="social_link">
            <img src={linkedin} alt="" />
          </a>
          <a href="" className="social_link">
            <img src={whatsapp} alt="" />
          </a>
          <a href="" className="social_link">
            <img src={instagram} alt="" />
          </a>
        </div>

        <div>Aquariana Corretora & administradora 2023 all rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
