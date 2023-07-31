import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Modal, Button } from "react-bootstrap";
import "./Aluguel.scss";
import casa1 from "../../../assets/imoveis/aluguel/casa_jardim_montanhes.jpeg";

const imoveisAluguelData = [
  {
    id: 1,
    title: "Jardim Montanhês",
    description: [
      "Casa de dois pavimentos independentes, sendo duas residências com 03 barracões fundos.",
      "01 vaga de garagem livre e coberta que pertence ao primeiro pavimento.",
      "Ideal para investidor, com renda aproximadamente de aluguel de R$4.000,00 mensalmente.",
    ],
    imageUrl: casa1,
  },
  {
    id: 2,
    title: "Jardim Montanfsdfsdfhês",
    description: [
      "Casa de dois pavimentos independentes, sendo duas residências com 03 barracões fundos.",
      "01 vaga de garagem livre e coberta que pertence ao primeiro pavimento.",
      "Ideal para investidor, com renda aproximadamente de aluguel de R$4.000,00 mensalmente.",
    ],
    imageUrl: casa1,
  },
  // Adicione outros objetos de imóveis aqui...
];

const Aluguel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardSpring = (id) => {
    const isHovered = hoveredCard === id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring({
      transform: isHovered ? "scale(1.1)" : "scale(1)",
      cursor: "pointer",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="aluguel">
      <div className="aluguel_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="aluguel_header__title text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            ALUGUEL
          </h1>
        </div>
      </div>
      <div className="aluguel_content">
        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Encontre seu Imóvel para Alugar
          </h1>
        </div>

        <div className="flex justify-center items-center mt-20 flex-wrap">
          {imoveisAluguelData.map((imovel) => (
            <animated.div
              key={imovel.id}
              className="card_imoveis bg-white shadow-lg rounded-lg p-4 max-w-sm m-2"
              onMouseEnter={() => handleMouseEnter(imovel.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                ...getCardSpring(imovel.id),
                zIndex: hoveredCard === imovel.id ? 1 : 0,
              }}
              onClick={() => handleCardClick(imovel)}
            >
              <div className="card__image-container">
                <img
                  src={imovel.imageUrl}
                  alt={imovel.title}
                  className="card__image"
                />
              </div>
              <div className="card__content">
                <h3 className="text-xl font-bold mb-2">{imovel.title}</h3>
                <hr className="my-2" />
                <p className="text-gray-600">{imovel.description}</p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {hoveredCard !== null && imoveisAluguelData[hoveredCard - 1].title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hoveredCard !== null &&
            imoveisAluguelData[hoveredCard - 1].description.map(
              (item, index) => <p key={index}>{item}</p>
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="text-black"
            variant="secondary"
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Aluguel;