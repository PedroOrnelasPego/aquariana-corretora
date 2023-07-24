import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Erro 404!</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
