import "./Condominios.scss";
import whatsapp from "../../assets/social/whatsapp.png";
import { HiPhone } from "react-icons/hi";

const Condominios = () => {
  return (
    <div className="condominios">
      <div className="condominios_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="condominios_header__title text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            CONDOMÍNIOS
          </h1>
        </div>
      </div>

      <div className="condominios__content">
        <div className="relative flex items-center flex-col justify-center text-center mt-10 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Prezado Síndico
          </h1>
        </div>
        <div className="condominios__content__paragrafo w-3/4 m-10">
          <p>
            É com enorme satisfação que venho apresentar-lhe a Aquariana Seguros
            e Imóveis, uma empresa com mais de 20 anos de experiência
            profissional em seguro predial condominial e outros seguros ligados
            a condomínios. Trabalhamos trazendo tranquilidade e segurança para o
            Condomínio e seus condôminos, assegurando que o síndico faça um
            excelente trabalho em sua gestão.
          </p>
          <p>
            Como sabemos, o Código Civil, Art. 1.346 determina que:{" "}
            <span>
              &quot;É obrigatório o seguro de toda a edificação contra o risco
              de incêndio ou destruição, total ou parcial&quot;.
            </span>{" "}
            O síndico é obrigado a contratar o seguro do condomínio sob pena de
            responder civil e criminalmente.
          </p>
          <p>
            Um seguro sob medida para condomínios mistos, de escritórios, e/ou
            consultórios, Flats , apart-hotéis, bem como condomínios
            residenciais horizontais e verticais. Com preço acessível e
            pagamento facilitado, oferecemos inúmeras vantagens, inclusive
            cotação nas melhores seguradoras do mercado.
          </p>
          <p>
            Corretores especializados garantem a oferta de coberturas nas
            melhores seguradoras que protegem o condomínio, o síndico, os
            colaboradores, condôminos e terceiros, além de facilidades e
            benefícios na contratação, e ainda serviços emergências gratuitos.
            Conte com um time especializado em condomínios para ajudá-lo!
          </p>
        </div>
      </div>

      <div className="conatiner_contato_condominio">
        <div className="contato_condominio">
          <span className="mb-2 font-medium">
            Dr Josimar Bezerra ( Diretor executivo )
          </span>
          <a
            href="https://wa.me//5531996881200?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <button className="contato_condominio__button">
              Solicite sua cotação!
              <img className="w-10" src={whatsapp} alt="" />
            </button>
          </a>
        </div>

        <div className="contato_condominio">
          <span className="mb-2 font-medium">Solicite sua cotação!</span>
          <p className="bg-transparent contato_condominio__button">
            <HiPhone className="text-black" size={22} />
            <span className="text-black">(31) 3344-5088</span>
          </p>
        </div>

        <div className="contato_condominio">
          <span className="mb-2 font-medium">
            Sibele Sevilhano ( Diretora comercial )
          </span>
          <a
            href="https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <button className="contato_condominio__button">
              Solicite sua cotação!
              <img className="w-10" src={whatsapp} alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Condominios;
