import "./Home.scss";
import backgroundHome from "../../assets/background/home.jpg";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <img
          src={backgroundHome}
          className="w-full h-auto sm:h-60 md:h-80 lg:h-96 xl:h-80"
          alt="Imagem responsiva"
        />
        <div className="home__header__container">
          <h1 className="home-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            AQUARIANA
          </h1>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-xl">
            Corretora & Administradora
          </h3>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-xl">
            Seguros e Imóveis
          </h3>
        </div>
      </div>
      <Container>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          accusantium illum voluptatum assumenda sit? Tempore soluta veniam
          dolorem, impedit qui accusantium. Commodi dolore exercitationem quam
          officiis ratione ad dignissimos eaque.
        </p>
      </Container>
    </div>
  );
};

export default Home;
