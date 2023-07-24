import Header from "../../components/Header";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="seguros">
        <div className="relative flex items-center flex-col justify-center text-center mt-20 font-bold text-shadow">
          <h1 className="header_title text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Seguros
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
