import PropTypes from "prop-types";
import "./EmptyPropertyList.scss";

const EmptyPropertyList = ({ mensagem }) => {
  return (
    <div className="lista-imoveis-vazia">
      <p>{mensagem}</p>
    </div>
  );
};

EmptyPropertyList.propTypes = {
  mensagem: PropTypes.string.isRequired,
};

export default EmptyPropertyList;
