import { Card, Modal } from "react-bootstrap";
import "./Commodities.scss";
import { useState } from "react";
import data from "./commoditiesData";

const Commodities = () => {
  const [showModal, setShowModal] = useState(null);

  const handleClose = () => setShowModal(null);
  const handleModalShow = (index) => setShowModal(index);

  return (
    <div>
      <div className="commodities">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="header_title text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            AQUARIANA COMMODITIES
          </h1>
        </div>
      </div>

      <div className="content">
        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="header_title text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Serviços
          </h1>
        </div>
        <div className="w-3/4 m-10">
          Somos especialistas em intermediações de commodities. Além disso,
          realizamos consultorias e investimentos, representando grupos
          expressivos no mercado internacional. Negociamos demandas de produtos
          alimentícios e promovemos a representação na venda de produtos
          agrícolas, minérios e derivados do petróleo. Estamos em busca
          constante dos melhores fornecedores para o atendimento dos nossos
          clientes, auxiliando na sua competitividade mercadológica. A oferta
          poderá variar de acordo com a disponibilidade de cada produto.
        </div>











        <div className="commodities_cards">
          {data.map((item, index) => (
            <Card key={index} className="bg-#A5B4C4 w-60 h-60 flex justify-center items-center">
              <Card.Img className="card_img" variant="top" src={item.imageSrc} alt={item.title} />
              <Card.Body className="commodities_cards_content">
                <button
                  type="button"
                  className="social_button"
                  onClick={() => handleModalShow(index)}
                >
                  {item.title}
                </button>
              </Card.Body>

              <Modal centered show={showModal === index} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {item.title}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {item.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </Modal.Body>
                <Modal.Footer>
                  <button
                    type="button"
                    className="social_button"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commodities;
