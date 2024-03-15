import "./Home.scss";

import teste from "../../assets/home.png";
import { Container, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="home_header__title text-5xl md:text-7xl lg:text-8xl xl:text-8xl">
            AQUARIANA
          </h1>
          <h3>Corretora & Administradora</h3>
          <h3> Seguros e Imóveis</h3>
        </div>
      </div>

      <div className="home__content">
        <div className="relative flex items-center flex-col justify-center text-center mt-16 font-bold text-shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Bem-vindo à Aquariana
          </h1>
          <h2 className="px-2">sua parceira confiável em seguros e imóveis!</h2>
        </div>
        <Container>
          <div className="home-section">
            <div className="w-3/4 mt-7">
              <p>
                Na Aquariana, entendemos a importância de proteger o que é mais
                valioso para você e encontrar o lar perfeito para suas
                necessidades. Como corretora e administradora especializada em
                seguros e imóveis, estamos aqui para simplificar e tornar a sua
                jornada mais tranquila.
              </p>
              <p>
                Navegue em nossa ampla gama de serviços, desde seguros
                condominiais até a negociação de commodities, confiando em nossa
                expertise e compromisso com a excelência.
              </p>
              <p>
                Estamos prontos para ajudá-lo a encontrar soluções sob medida
                que atendam às suas necessidades e superem suas expectativas.
                Entre em contato hoje mesmo e descubra como podemos fazer a
                diferença para você!
              </p>
              <p>
                Sinta-se à vontade para ajustar o texto conforme necessário para
                refletir melhor a voz e a identidade da sua empresa.
              </p>
            </div>
            <Image className="home-img" src={teste} alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
