import { v4 as uuidv4 } from "uuid";
import casa1 from "../../../assets/imoveis/aluguel/casa_jardim_montanhes.jpeg";
import casa2 from "../../../assets/imoveis/aluguel/casa_teste.jpg";

const imoveisAluguelData = [
  {
    id: "01",
    title: "Jardim Montanhês",
    description: [
      "Casa de dois pavimentos independentes, sendo duas residências com 03 barracões fundos.",

      "01 vaga de garagem livre e coberta que pertence ao primeiro pavimento.",

      "Ideal para investidor, com renda aproximadamente de aluguel de R$4.000,00 mensalmente.",

      <span key={uuidv4()}>
        <strong>Tipo:</strong> Casa Residencial
      </span>,
      <span key={uuidv4()}>
        <strong>Endereço:</strong> Rua Moema 113, Jardim Montanhês - CEP
        30730580
      </span>,
      <span key={uuidv4()}>
        <strong>Metragem:</strong> 340m² de área
      </span>,

      <span key={uuidv4()}>
        <strong>Preço:</strong> R$600.000,00
      </span>,

      // <iframe
      //   src="https://www.google.com/maps/embed?pb=!4v1691452218176!6m8!1m7!1sI_xgfivqBxQXzhlIC8_UCg!2m2!1d-19.91089089089778!2d-43.98249876271299!3f111.49787297625276!4f1.1830480985877472!5f0.7820865974627469"
      //   width="100%"
      //   height="320"
      //   allowfullscreen=""
      //   loading="lazy"
      //   key={uuidv4()}
      //   rel="noopener noreferrer"
      // ></iframe>,
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "02",
    title: "Casa teste 2",
    description: [
      "Casa de dois pavimentos independentes, sendo duas residências com 03 barracões fundos.",

      "01 vaga de garagem livre e coberta que pertence ao primeiro pavimento.",

      "Ideal para investidor, com renda aproximadamente de aluguel de R$4.000,00 mensalmente.",

      <span key={uuidv4()}>
        <strong>Tipo:</strong> Casa Residencial
      </span>,
      <span key={uuidv4()}>
        <strong>Endereço:</strong> Rua Moema 113, Jardim Montanhês - CEP
        30730580
      </span>,
      <span key={uuidv4()}>
        <strong>Metragem:</strong> 340m² de área
      </span>,

      <span key={uuidv4()}>
        <strong>Preço:</strong> R$600.000,00
      </span>,

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.8293490835147!2d-43.982453343801176!3d-19.911025414224696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696d8ac35baad%3A0x435afaa90c74035!2sR.%20Moema%2C%20113%20-%20Jardim%20Montanh%C3%AAs%2C%20Belo%20Horizonte%20-%20MG%2C%2030810-190!5e0!3m2!1spt-BR!2sbr!4v1691452691464!5m2!1spt-BR!2sbr"
        width="100%"
        height="320"
        key={uuidv4()}
        allowfullscreen=""
        loading="lazy"
        rel="noopener noreferrer"
      ></iframe>,
    ],
    imgCapa: casa2,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
];

export default imoveisAluguelData;
