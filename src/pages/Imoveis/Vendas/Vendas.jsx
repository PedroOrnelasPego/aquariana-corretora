import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { Modal, Button, Carousel } from "react-bootstrap";
import "./Vendas.scss";
import imoveisVendasData from "./imoveisVendasData";
import ContactForm from "../../../components/ContactForm/ContactForm";
import EmptyPropertyList from "../../../components/EmptyPropertyList";
import { Helmet } from "react-helmet";
import { isFirebaseEnabled } from "../../../firebase/firebase";
import { listImoveisPublic } from "../../../services/imoveisFirebase";

const ImovelCard = ({ imovel, onOpen }) => {
  const [hovered, setHovered] = useState(false);
  const springProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    zIndex: hovered ? 1 : 0,
  });

  const description = (imovel.description || []).join(" ");

  return (
    <animated.div
      className={`card_imoveis bg-white shadow-lg rounded-lg p-4 max-w-sm m-2 cursor-pointer ${
        hovered ? "hovered" : ""
      }`}
      onClick={() => onOpen(imovel.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={springProps}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imovel.imgCarousel?.[0] || imovel.imgCapa}
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
        onClick={(e) => {
          e.stopPropagation();
          onOpen(imovel.id);
        }}
      >
        Saiba mais!
      </Button>
    </animated.div>
  );
};

ImovelCard.propTypes = {
  imovel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string),
    imgCapa: PropTypes.string,
    imgCarousel: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};

const Vendas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImovel, setSelectedImovel] = useState(null);
  const [imoveis, setImoveis] = useState(imoveisVendasData);
  const [loadingImoveis, setLoadingImoveis] = useState(isFirebaseEnabled);
  const [imoveisError, setImoveisError] = useState(null);

  const imoveisUi = useMemo(() => {
    return (imoveis || []).map((imovel) => {
      const descriptionArr = Array.isArray(imovel.description)
        ? imovel.description
        : String(imovel.description || "")
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);

      const imgCarousel =
        imovel.imgCarousel || imovel.imgCarouselUrls || imovel.imgs || [];
      const imgCapa = imovel.imgCapa || imovel.imgCapaUrl || imgCarousel?.[0];

      return {
        ...imovel,
        description: descriptionArr,
        imgCarousel,
        imgCapa,
      };
    });
  }, [imoveis]);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      if (!isFirebaseEnabled) return;
      setImoveisError(null);
      setLoadingImoveis(true);
      try {
        const data = await listImoveisPublic({ type: "venda" });
        if (mounted) setImoveis(data);
      } catch (err) {
        if (mounted) {
          setImoveisError(
            err?.message || "Não foi possível carregar os imóveis no momento.",
          );
        }
      } finally {
        if (mounted) setLoadingImoveis(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const handleCardClick = (id) => {
    const imovel = imoveisUi.find((imovel) => imovel.id === id);
    setSelectedImovel(imovel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    <div className="vendas">
      <Helmet>
        <meta
          name="description"
          content="Encontre os melhores imóveis à venda. Consulte nossa lista de propriedades disponíveis e encontre a casa dos seus sonhos."
        />
      </Helmet>
      <div className="vendas_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="vendas_header__title text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            IMÓVEIS À VENDA
          </h1>
        </div>
      </div>
      <div className="vendas_content">
        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Encontre seu Imóvel à Venda
          </h1>
        </div>

        <div className="gap-2.5 flex justify-center items-center m-20 flex-wrap">
          {loadingImoveis ? (
            <p>Carregando imóveis...</p>
          ) : imoveisError ? (
            <EmptyPropertyList mensagem={imoveisError} />
          ) : imoveisUi.length === 0 ? (
            <EmptyPropertyList mensagem="Nenhum imóvel à venda disponível no momento." />
          ) : (
            imoveisUi.map((imovel) => (
              <ImovelCard
                key={imovel.id}
                imovel={imovel}
                onOpen={handleCardClick}
              />
            ))
          )}
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
              {(selectedImovel.imgCarousel || [selectedImovel.imgCapa]).map(
                renderImovelCarousel,
              )}
            </Carousel>
          )}
          <hr className="my-2" />
          {selectedImovel &&
            selectedImovel.description.map(renderImovelDescription)}
          <hr className="my-2" />
          <ContactForm
            selectedImovelId={selectedImovel ? selectedImovel.id : null}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Vendas;
