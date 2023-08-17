import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Modal, Button, Carousel } from "react-bootstrap";
import "./Aluguel.scss";
import imoveisAluguelData from "./imoveisAluguelData";

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

  const renderImovelCarousel = (img, index) => (
    <Carousel.Item className="carousel__content" key={index}>
      <img
        className="carousel__content__img"
        src={img}
        alt={selectedImovel.title}
      />
    </Carousel.Item>
  );

  const renderImovelDescription = (item, index) => (
    <p key={index}>
      {typeof item === "string"
        ? item.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))
        : item}
    </p>
  );

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
            const description = imovel.description.join(" ");
            const isImovelHovered = hoveredCard === imovel.id;

            return (
              <animated.div
                key={imovel.id}
                className={`card_imoveis bg-white shadow-lg rounded-lg p-4 max-w-sm m-2 cursor-pointer ${
                  isImovelHovered ? "hovered" : ""
                }`}
                onClick={() => handleCardClick(imovel.id)}
                onMouseEnter={() => handleMouseEnter(imovel.id)}
                onMouseLeave={handleMouseLeave}
                style={getCardSpring(imovel.id)}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imovel.imgCarousel[0]}
                    alt={imovel.title}
                  />
                  <Carousel.Caption>
                    <h3>{imovel.title}</h3>
                    <p>{description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <div className="card_imoveis_content">
                  <img
                    src={imovel.imgCapa}
                    alt={imovel.title}
                    className="card_imoveis_content__image"
                  />
                </div>
                <div className="card__content">
                  <h3 className="text-xl font-bold mb-2">{imovel.title}</h3>
                  <hr className="my-2" />
                  <p className="card__content__text">{description}</p>
                </div>
                <Button
                  variant="warning"
                  className="w-full"
                  onClick={() => handleCardClick(imovel.id)}
                >
                  Saiba mais!
                </Button>
              </animated.div>
            );
          })}
        </div>
      </div>
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        centered
        className="modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedImovel && selectedImovel.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImovel && (
            <Carousel>
              {selectedImovel.imgCarousel.map(renderImovelCarousel)}
            </Carousel>
          )}
          <hr className="my-2" />
          {selectedImovel &&
            selectedImovel.description.map(renderImovelDescription)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Aluguel;
