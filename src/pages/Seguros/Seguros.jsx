import "./Seguros.scss";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

import { Container } from "react-bootstrap";
import segurosData from "./segurosData";

const Seguros = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="seguros">
      <div className="seguros_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="seguros_header__title text-5xl md:text-7xl lg:text-8xl xl:text-8xl">
            Seguros
          </h1>
        </div>
      </div>

      <div className="seguros__content">
        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Encontre o seguro ideal para você
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
        <Container>
          <div className="seguros__content">
            {segurosData.map((seguro, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const hoverSpring = useSpring({
                scale: hoveredIndex === index ? 1.1 : 1,
              });

              const openWhatsapp = () => {
                window.open(
                  `https://wa.me//5531${seguro.num}?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20de${seguro.msg}.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F`
                );
              };

              return (
                <animated.div
                  key={index}
                  className="card_seguros"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    openWhatsapp();
                  }}
                  style={{
                    ...hoverSpring,
                    cursor: `${hoveredIndex === index ? "pointer" : "default"}`,
                  }}
                >
                  {seguro.icon}
                  <span className="text-center">{seguro.title}</span>
                </animated.div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Seguros;
