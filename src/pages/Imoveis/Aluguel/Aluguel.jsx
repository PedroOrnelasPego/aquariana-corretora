import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Modal, Button } from "react-bootstrap";
import "./Aluguel.scss";
import casa1 from "../../../assets/imoveis/aluguel/casa_jardim_montanhes.jpeg";
import casa2 from "../../../assets/imoveis/aluguel/casa_teste.jpg";

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
    title: "Casa teste 2",
    description: [
      "Casa de dois pavimentos independentes, sendo duas residências com 03 barracões fundos.",

      "01 vaga de garagem livre e coberta que pertence ao primeiro pavimento.",

      "Ideal para investidor, com renda aproximadamente de aluguel de R$4.000,00 mensalmente.",
    ],
    imageUrl: casa2,
  },
  // Adicione outros objetos de imóveis aqui...
];

const MAX_DESCRIPTION_LENGTH = 120; // Tamanho máximo da descrição

const Aluguel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImovel, setSelectedImovel] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (id) => {
    const imovel = imoveisAluguelData.find((imovel) => imovel.id === id);
    setSelectedImovel(imovel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      zIndex: isHovered ? 1 : 0,
    });
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

        <div className="gap-2.5 flex justify-center items-center m-20 flex-wrap">
          {imoveisAluguelData.map((imovel) => {
            const truncatedDescription = imovel.description
              .join(" ")
              .substring(0, MAX_DESCRIPTION_LENGTH);
            const description =
              imovel.description.join(" ").length > MAX_DESCRIPTION_LENGTH
                ? truncatedDescription + "..."
                : imovel.description.join(" ");

            return (
              <animated.div
                key={imovel.id}
                className="card_imoveis bg-white shadow-lg rounded-lg p-4 max-w-sm m-2 cursor-pointer"
                onClick={() => handleCardClick(imovel.id)}
                onMouseEnter={() => handleMouseEnter(imovel.id)}
                onMouseLeave={handleMouseLeave}
                style={getCardSpring(imovel.id)}
              >
                <div className="card_imoveis_content">
                  <img
                    src={imovel.imageUrl}
                    alt={imovel.title}
                    className="card_imoveis_content__image"
                  />
                </div>
                <div className="card__content">
                  <h3 className="text-xl font-bold mb-2">{imovel.title}</h3>
                  <hr className="my-2" />
                  <p className="card__content__text">{description}</p>
                  <hr className="my-2" />
                  <Button
                    variant="secondary"
                    className="w-full text-black"
                    onClick={() => handleCardClick(imovel.id)}
                  >
                    Saiba mais!
                  </Button>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
      <Modal show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImovel && selectedImovel.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImovel &&
            selectedImovel.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Aluguel;
