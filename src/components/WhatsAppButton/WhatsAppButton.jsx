import "./WhatsAppButton.scss";
import WhatsAppIMG from "../../assets/social/whatsapp.png";

const WhatsAppButton = () => {
  return (
    <div className="whatsapp">
      <a
        target="_blank"
        href="https://wa.me//5531989073087?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
        rel="noopener noreferrer"
      >
        <img
          src={WhatsAppIMG}
          alt="Fale Conosco pelo WhatsApp"
          title="Fale Conosco pelo WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
