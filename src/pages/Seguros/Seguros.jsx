import "./Seguros.scss";
import React from "react";
import { useSpring, animated } from "react-spring";
import { ImMobile, ImTruck } from "react-icons/im";
import { FaCar, FaCamera } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { MdElderly, MdPets } from "react-icons/md";
import { BsFillHeartPulseFill, BsFillHouseDoorFill } from "react-icons/bs";

const Seguros = () => {
  // eslint-disable-next-line react/prop-types
  const Card = ({ icon, title, link }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardSpring = useSpring({
      transform: isHovered ? "scale(1.1)" : "scale(1)",
      cursor: "pointer",
    });

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleCardClick = () => {
      if (link) {
        window.open(link, "_blank");
      }
    };

    return (
      <animated.div
        className="card_seguros"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardSpring}
        onClick={handleCardClick}
      >
        {icon}
        <span className="text-center">{title}</span>
      </animated.div>
    );
  };

  const segurosData = [
    {
      icon: <BsFillHouseDoorFill size={90} />,
      title: "Seguro Residêncial",
      link: "https://wwws.portoseguro.com.br/vendaonline/residencia/home.ns?cod=dd253b6d72c34073bfc776d870ed910d&utm_source=40418J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE",
    },
    {
      icon: (
        <div className="dual_seguros">
          <ImMobile size={60} />
          <FaCamera size={60} />
        </div>
      ),
      title: "Celulares e Eletroportáteis",
      link: "http://porto.vc/RAMOS_ELEMENTARES_40418J",
    },
    {
      icon: (
        <div className="dual_seguros">
          <FaCar size={60} />
          <ImTruck size={60} />
        </div>
      ),
      title: "Seguro de Veículos",
      link: "https://wwws.portoseguro.com.br/vendaonline/automovel/home.ns?cod=75ccc1312d2c4b699389930b79d97c55&utm_source=40418J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE",
    },
    {
      icon: <MdElderly size={90} />,
      title: "Previdência Privada",
      link: "https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
    },
    {
      icon: <BsFillHeartPulseFill size={90} />,
      title: "Seguro de Vida",
      link: "https://wwws.portoseguro.com.br/vendaonline/vidamaissimples/home.ns?cod=598a5d23e43045e1973f4cb3d806c817&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE",
    },
    {
      icon: (
        <div className="dual_seguros">
          <MdPets size={70} />
          {/* <GiHorseHead size={60} /> */}
          <GiCow size={80} />
        </div>
      ),
      title: "Seguro Pet's e Agronegócio",
      link: "https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
    },
    {
      icon: <PiAirplaneTiltFill size={90} />,
      title: "Viagem",
      link: "https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
    },
  ];

  return (
    <div className="seguros">
      <div className="seguros_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="seguros_header__title text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            Seguros
          </h1>
        </div>
      </div>

      <div className="seguros__content flex-col ">
        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Confira nossos seguros
          </h1>
        </div>

        <div className="w-3/4 mt-7">
          Bem-vindo à nossa gama completa de soluções de proteção. Na Aquariana
          Corretora e Administradora, cuidamos das suas necessidades de
          segurança. Explore nossas opções abrangentes de seguro e descubra como
          podemos proteger o que é mais importante para você. De seguros
          residenciais a seguros de viagem, estamos aqui para oferecer
          tranquilidade em todas as áreas da sua vida.
        </div>

        <div className="seguros__content">
          {segurosData.map((seguro, index) => (
            <Card
              key={index}
              icon={seguro.icon}
              title={seguro.title}
              link={seguro.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seguros;
