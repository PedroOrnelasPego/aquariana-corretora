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
            href="https://wa.me//5531998917362?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
            rel="noopener noreferrer"
            className="social_link"
          >
            <img src={whatsapp} alt="" />
          </a>
          <a
            href="https://www.instagram.com/aquarianacorretora/"
            target="_blank"
            rel="noopener noreferrer"
            className="social_link"
          >
            <img src={instagram} alt="" />
          </a>
        </div>

        <div>Aquariana Corretora & administradora 2023 all rights reserved</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            marginTop: "2rem",
            marginBottom: "2rem",
            fontSize: "0.9rem",
            fontFamily: "sans-serif",
            opacity: 0.85,
          }}
        >
          <span>Desenvolvido por&nbsp;</span>
          <a
            href="https://veritasweb.dev.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f5d7a3",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Veritas Web
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
