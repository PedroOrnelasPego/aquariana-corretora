import "./Footer.scss";
import instagram from "../../assets/social/instagram.png";
import whatsapp from "../../assets/social/whatsapp-2.png";
import linkedin from "../../assets/social/linkedin.png";

// eslint-disable-next-line react/prop-types
const Footer = ({ className }) => {
  return (
    <footer className={className}>
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
