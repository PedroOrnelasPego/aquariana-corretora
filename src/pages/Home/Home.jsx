import React from "react";
import Header from "../../components/Header";
import { useSpring, animated } from "react-spring";
import { ImMobile, ImTruck } from "react-icons/im";
import { FaCar, FaCamera } from "react-icons/fa";
import { GiHorseHead } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { MdElderly, MdPets } from "react-icons/md";
import { BsFillHeartPulseFill, BsFillHouseDoorFill } from "react-icons/bs";
import "./Home.scss";

const Home = () => {
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
      icon: <BiSolidBuildingHouse size={90} />,
      title: "Seguro Condomínio",
      link: "whatsapp",
    },
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
      link: "whatsapp",
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
          <GiHorseHead size={60} />
        </div>
      ),
      title: "Seguro Pet's e Agronegócio",
      link: "whatsapp",
    },
    {
      icon: <PiAirplaneTiltFill size={90} />,
      title: "Viagem",
      link: "whatsapp",
    },
  ];

  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>

      <div className="seguros">
        <div className="relative flex items-center flex-col justify-center text-center mt-20 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Seguros
          </h1>
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

export default Home;
