import Header from "../../components/Header";
import { motion } from "framer-motion";
import { ImMobile, ImTruck } from "react-icons/im";
import { FaCar, FaMotorcycle, FaLaptop, FaCamera } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { BsFillHeartPulseFill, BsFillHouseDoorFill } from "react-icons/bs";
import "./Home.scss";

const Home = () => {
  return (
    <div className="my-header">
      <div className="header">
        <Header></Header>
      </div>
      <div className="seguros">
        <div className="relative flex items-center flex-col justify-center text-center mt-20 font-bold text-shadow">
          <h1 className="header_title text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Seguros
          </h1>
        </div>
        <div className="containerr">
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BiSolidBuildingHouse size={90} />
              <span>Seguro Condominio</span>
            </motion.div>
          </a>
          <a
            href="https://wwws.portoseguro.com.br/vendaonline/residencia/home.ns?cod=dd253b6d72c34073bfc776d870ed910d&utm_source=40418J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsFillHouseDoorFill size={90} />
              <span>Seguro Casa</span>
            </motion.div>
          </a>
          <a
            href="http://porto.vc/RAMOS_ELEMENTARES_40418J"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <ImMobile size={90} />
              <span>Celulares Novos</span>
            </motion.div>
          </a>
          <a
            href="https://wwws.portoseguro.com.br/vendaonline/automovel/home.ns?cod=75ccc1312d2c4b699389930b79d97c55&utm_source=40418J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros">
                <FaCar size={60} />
                <ImTruck size={60} />
              </div>
              <span>Seguro de Veículos</span>
            </motion.div>
          </a>
          <a
            href="https://wwws.portoseguro.com.br/vendaonline/moto/home.ns?cod=94ce9d65e9f64c52b55e8b177bff9ede&utm_source=40418J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaMotorcycle size={90} />
              <span>Seguro de Motocicletas</span>
            </motion.div>
          </a>
          <a
            href="https://wwws.portoseguro.com.br/vendaonline/vidamaissimples/home.ns?cod=598a5d23e43045e1973f4cb3d806c817&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsFillHeartPulseFill size={90} />
              <span>Seguro de Vida</span>
            </motion.div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros">
                <FaLaptop size={60} />
                <FaCamera size={60} />
              </div>

              <span>Equipamentos Portáteis</span>
            </motion.div>
          </a>
          <a
            href="https://wwws.portoseguro.com.br/vendaonline/viagem/home.ns?cod=2d11f370d2a34415b4d3f63149cbf9d2&utm_source=40418J&utm_medium=geradorLinks&utm_campaign=GeradordeLinks_M279YJ&utm_content=AQUARIANA_CORRETORA_E_ADIMINISTRADORA&origem=BELO_HORIZONTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros">
                <PiAirplaneTiltFill size={90} />
              </div>
              <span>Viagem</span>
            </motion.div>
          </a>
          {/* <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros"></div>
              <span>Empresarial</span>
            </motion.div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros"></div>
              <span>SEGURO PET ( ANIMAIS )</span>
            </motion.div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros"></div>
              <span>Seguro de Cargas</span>
            </motion.div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros"></div>
              <span>AGRO/ SAFRAS</span>
            </motion.div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="card_seguros"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="dual_seguros"></div>
              <span>Máquinas</span>
            </motion.div>
          </a> */}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
