import { Card, Modal } from "react-bootstrap";
import "./Commodities.scss";
import { useState } from "react";

const Commodities = () => {
  const [showPetroModal, setShowPetroModal] = useState(false);
  const [showMineralModal, setShowMineralModal] = useState(false);

  const handleClose = () => {
    setShowPetroModal(false);
    setShowMineralModal(false);
  };

  const handlePetroModalShow = () => setShowPetroModal(true);
  const handleMineralModalShow = () => setShowMineralModal(true);

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
          <Card className="w-60 h-60">
            <Card.Body className="commodities_cards_content">
              <button onClick={handlePetroModalShow}>
                Derivados de Petróleo
              </button>
            </Card.Body>

            <Modal centered show={showPetroModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Derivados de Petróleo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Asfalto, combustíveis para aeronaves, combustíveis para navios,
                coque, gasolina A, gasolina de aviação, GLP, lubrificante,
                nafta, óleo combustível, óleo diesel, outros não energéticos,
                parafina, querosene de aviação (QAV), querosene iluminante e
                solvente.
              </Modal.Body>
              <Modal.Footer>
                <button onClick={handleClose}>Close</button>
              </Modal.Footer>
            </Modal>
          </Card>
          <Card className="w-60 h-60">
            <Card.Body className="commodities_cards_content">
              <button onClick={handleMineralModalShow}>Minerais</button>
            </Card.Body>

            <Modal centered show={showMineralModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Minerais</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Descritivo dos minerais que temos acesso, de forma mediata e
                imediata, seja o mineral já extraído, mina ou projeto greenfield
                (solo): Ouro: Minério de ferro Lítio Diamante: Platinóide
                (cobre): projeto Niquel: Mina com projeto Ou outro mineral
                específico, poderia ser feita uma busca.
              </Modal.Body>
              <Modal.Footer>
                <button onClick={handleClose}>Close</button>
              </Modal.Footer>
            </Modal>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Commodities;
