import { Card, Modal } from "react-bootstrap";
import "./Commodities.scss";
import { useState } from "react";
import data from "./commoditiesData";
import commodities from "../../assets/commodities/coffe_gold_corn.png";

const Commodities = () => {
  const [showModal, setShowModal] = useState(null);

  const handleClose = () => setShowModal(null);
  const handleModalShow = (index) => setShowModal(index);

  return (
    <div className="commodities">
      <div className="commodities_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="commodities_header__title text-5xl md:text-7xl lg:text-8xl xl:text-8xl">
            COMMODITIES
          </h1>
        </div>
      </div>

      <div className="content">
        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
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
            <div key={index}>
              <button type="button" onClick={() => handleModalShow(index)}>
                <Card className="commodities_card flex justify-center items-center">
                  <Card.Img
                    className="card_img"
                    src={item.imageSrc}
                    alt={item.title}
                  />
                  <Card.Body className="commodities_card__content">
                    {item.title}
                  </Card.Body>
                </Card>
              </button>

              <Modal centered show={showModal === index} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.title}</Modal.Title>
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
            </div>
          ))}
        </div>

        <div></div>

        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="mt-40 header_title text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Representações
          </h1>
        </div>

        <div className="w-3/4 m-10">
          Representamos grupos expressivos no mercado internacional, sendo o
          canal principal de atendimento a demandas de produtos alimentícios na
          América Latina, bem como na representação na venda de fertilizantes e
          derivados do petróleo. Estamos sempre em busca constante dos melhores
          fornecedores para atendimento dos nossos clientes, auxiliando-os na
          competitividade mercadológica. Assim, garantimos o fortalecimento das
          relações e o crescimento conjunto. Estamos sempre abertos a expansão!
        </div>

        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="mt-40 header_title text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Consultoria
          </h1>
        </div>

        <div className="w-3/4 m-10">
          Prestamos consultoria e apoio administrativo às empresas, alicerçados
          por excelente consultoria jurídica, para que que se viabilize inserção
          no comércio exterior e auxilio na capacitação da empresa para importar
          e exportar, possibilitando o acesso ao mercado internacional.
          Possuímos experiência com registro de produtos, marcas e patentes
          propiciando licenciamento para agir no comércio exterior, de modo ágil
          e eficaz. Fornecemos suporte, direcionamento técnico e administrativo
          a empresas estrangeiras que tenham interesse em exportar seus produtos
          para o Brasil, bem como seus respectivos registros junto aos órgãos
          competentes, propiciando uma rápida inserção e dentro dos parâmetros
          comerciais brasileiros.
        </div>

        <div className="fundos"></div>

        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="mt-40 header_title text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Fundos de Investimentos
          </h1>
        </div>

        <div className="w-3/4 m-10">
          Temos parcerias com Fundos de investimentos, onde recebemos demandas
          de leitura de mercados e apresentamos fornecedores para participação
          de operações. Auxiliamos nossos clientes, que possuam necessidade de
          aportes financeiros, a apresentar projetos. Viabilizamos e
          aproximamos, para ganho em toda cadeia de negócio. Trabalhamos com
          Fundos Nacionais e Estrangeiros.
        </div>

        <div className="commodities__img">
          <img src={commodities} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Commodities;
