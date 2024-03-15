

import casa from "../../assets/seguros/casa.png";
import idoso from "../../assets/seguros/idoso.png";
import smartphone from "../../assets/seguros/smartphone.png";
import vaca from "../../assets/seguros/vaca.png";
import veiculo from "../../assets/seguros/veiculo.png";
import vida from "../../assets/seguros/vida.png";
import pet from "../../assets/seguros/pet.png";
import aviao from "../../assets/seguros/aviao.png";

const segurosData = [
  {
    icon: <img src={casa} className="w-24" alt="" />,
    title: "Seguro Residêncial",
    content: "Conteúdo do Seguro Residêncial...",
    num: "32",
    msg: "%20seguro%20residêncial",
  },
  {
    icon: <img src={smartphone} className="w-24" alt="" />,
    title: "Celulares e Eletroportáteis",
    content: "Conteúdo do Seguro de Celulares e Eletroportáteis...",
    num: "33",
    msg: "%20seguro%20de%20celulares%20e%20eletroportáteis",
  },
  {
    icon: <img src={veiculo} className="w-24" alt="" />,
    title: "Seguro de Veículos",
    content: "Conteúdo do Seguro de Veículos...",
    msg: "%20seguro%20de%20celulares%20e%20eletroportáteis",
  },
  {
    icon: <img src={idoso} className="w-24" alt="" />,
    title: "Previdência Privada",
    content: "Conteúdo da Previdência Privada...",
    msg: "%20seguro%20de%20celulares%20e%20eletroportáteis",
  },
  {
    icon: <img src={vida} className="w-24" alt="" />,
    title: "Seguro de Vida",
    content: "Conteúdo do Seguro de Vida...",
    msg: "%20seguro%20de%20celulares%20e%20eletroportáteis",
  },
  {
    icon: (
      <div className="dual_seguros">
        <img src={pet} className="w-24" alt="" />,
        <img src={vaca} className="w-24" alt="" />,
      </div>
    ),
    title: "Seguro Pet's e Agronegócio",
    content: "Conteúdo do Seguro Pet's e Agronegócio...",
    msg: "%20seguro%20de%20celulares%20e%20eletroportáteis",
  },
  {
    icon: <img src={aviao} className="w-24" alt="" />,
    title: "Viagem",
    content: "Conteúdo do Seguro de Viagem...",
    msg: "%20seguro%20de%20celulares%20e%20eletroportáteis",
  },
];

export default segurosData;
