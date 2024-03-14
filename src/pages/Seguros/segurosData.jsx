import { ImMobile, ImTruck } from "react-icons/im";
import { FaCar, FaCamera } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { MdElderly, MdPets } from "react-icons/md";
import { BsFillHeartPulseFill, BsFillHouseDoorFill } from "react-icons/bs";

// import casa from '../../assets/seguros/casa.png'
// import idoso from '../../assets/seguros/idoso.png'
// import smartphone from '../../assets/seguros/smartphone.png'
// import vaca from '../../assets/seguros/vaca.png'
// import veiculo from '../../assets/seguros/veiculo.png'
// import vida from '../../assets/seguros/vida.png'

const segurosData = [
  {
    icon: <BsFillHouseDoorFill size={90} />,
    title: "Seguro Residêncial",
    content: "Conteúdo do Seguro Residêncial...",
  },
  {
    icon: (
      <div className="dual_seguros">
        <ImMobile size={60} />
        <FaCamera size={60} />
      </div>
    ),
    title: "Celulares e Eletroportáteis",
    content: "Conteúdo do Seguro de Celulares e Eletroportáteis...",
  },
  {
    icon: (
      <div className="dual_seguros">
        <FaCar size={60} />
        <ImTruck size={60} />
      </div>
    ),
    title: "Seguro de Veículos",
    content: "Conteúdo do Seguro de Veículos...",
  },
  {
    icon: <MdElderly size={90} />,
    title: "Previdência Privada",
    content: "Conteúdo da Previdência Privada...",
  },
  {
    icon: <BsFillHeartPulseFill size={90} />,
    title: "Seguro de Vida",
    content: "Conteúdo do Seguro de Vida...",
  },
  {
    icon: (
      <div className="dual_seguros">
        <MdPets size={70} />
        <GiCow size={80} />
      </div>
    ),
    title: "Seguro Pet's e Agronegócio",
    content: "Conteúdo do Seguro Pet's e Agronegócio...",
  },
  {
    icon: <PiAirplaneTiltFill size={90} />,
    title: "Viagem",
    content: "Conteúdo do Seguro de Viagem...",
  },
];

export default segurosData;
