import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import errorIMG from "../../assets/error/error_404.jpg";
import Button from "react-bootstrap/Button";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1 className="header_title text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Página não encontrada!
      </h1>
      <img src={errorIMG} alt="" />
      <span>
        <Button className="button">
          <Link to="/">Retornar para o menu principal</Link>
        </Button>
      </span>
    </div>
  );
};

export default ErrorPage;
