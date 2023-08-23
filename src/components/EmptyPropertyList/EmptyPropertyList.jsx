import './EmptyPropertyList.scss'

const EmptyPropertyList = ({ mensagem }) => {
  return (
<div className="lista-imoveis-vazia">
      <p>{mensagem}</p>
    </div>
  );
};

export default EmptyPropertyList;
