import { v4 as uuidv4 } from "uuid";
import casa1 from "../../../assets/imoveis/aluguel/casa_jardim_montanhes.jpeg";
import casa2 from "../../../assets/imoveis/aluguel/casa_teste.jpg";

const imoveisAluguelData = [
  {
    id: 1,
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
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: 2,
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
    ],
    imgCapa: casa2,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
];

export default imoveisAluguelData;
