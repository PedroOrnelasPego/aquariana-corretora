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
    num: "989073087",
    msg: "%20seguro%20residencial",
  },
  {
    icon: <img src={smartphone} className="w-24" alt="" />,
    title: "Celulares e Eletroportáteis",
    num: "989073087",
    msg: "%20seguro%20de%20celulares%20e%20eletroportáteis",
  },
  {
    icon: <img src={veiculo} className="w-24" alt="" />,
    title: "Seguro de Veículos",
    num: "989073087",
    msg: "%20seguro%20de%20veículos",
  },
  {
    icon: <img src={idoso} className="w-24" alt="" />,
    title: "Previdência Privada",
    num: "989073087",
    msg: "%20previdência%20privada",
  },
  {
    icon: <img src={vida} className="w-24" alt="" />,
    title: "Seguro de Vida",
    num: "989073087",
    msg: "%20seguro%20de%20vida",
  },
  {
    icon: (
      <div className="dual_seguros">
        <img src={pet} className="w-24" alt="" />,
        <img src={vaca} className="w-24" alt="" />,
      </div>
    ),
    title: "Seguro Pet's e Agronegócio",
    num: "989073087",
    msg: "%20seguro%20de%20pets%20e%20agronegócio",
  },
  {
    icon: <img src={aviao} className="w-24" alt="" />,
    title: "Viagem",
    num: "989073087",
    msg: "%20seguro%20de%20viagem",
  },
];

export default segurosData;
