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
          <a
            target="_blank"
            href="https://wa.me//5531989073087?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
            rel="noopener noreferrer"
            className="social_link"
          >
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
