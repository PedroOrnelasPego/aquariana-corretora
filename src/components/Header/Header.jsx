import "./Header.scss";

const Header = () => {
  return (
    <header className="masthead">
      <div className="home_header">
        <div className="relative flex items-center flex-col justify-center text-center text-white font-bold">
          <h1 className="home_header__title text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            AQUARIANA
          </h1>
          <h3 className="header_title">Corretora & Administradora</h3>
          <h3 className="header_title">Seguros e Imóveis</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
