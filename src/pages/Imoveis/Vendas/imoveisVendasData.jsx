import { v4 as uuidv4 } from "uuid";
import casa1 from "../../../assets/imoveis/aluguel/casa_jardim_montanhes.jpeg";
import casa2 from "../../../assets/imoveis/aluguel/casa_teste.jpg";

const imoveisVendaData = [
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
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "02",
    title: "Residência Aurora",
    description: [
      "Ampla residência em um bairro tranquilo e arborizado.",
      "Ótima iluminação natural e espaços bem distribuídos.",
      "Conta com 4 quartos, 2 suítes, e um jardim encantador.",
      "Tipo: Casa Residencial",
      "Endereço: Rua das Flores 45, Residencial Aurora - CEP 31220300",
      "Metragem: 280m² de área",
      "Preço: R$850.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "03",
    title: "Apartamento Primavera",
    description: [
      "Apartamento moderno e aconchegante, perfeito para famílias.",
      "Possui sala ampla com vista panorâmica da cidade.",
      "Área de lazer completa com piscina e academia.",
      "Tipo: Apartamento",
      "Endereço: Av. das Palmeiras 123, Condomínio Primavera - CEP 30540900",
      "Metragem: 110m² de área",
      "Preço: R$420.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "04",
    title: "Casa Solaris",
    description: [
      "Casa contemporânea com design sofisticado e acabamentos de alta qualidade.",
      "Possui um espaçoso terraço com vista para o mar.",
      "Localizada em um condomínio fechado com segurança 24 horas.",
      "Tipo: Casa Residencial",
      "Endereço: Rua do Sol 78, Condomínio Solaris - CEP 40140100",
      "Metragem: 400m² de área",
      "Preço: R$1.200.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "05",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "06",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "07",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "08",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "09",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "10",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "11",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "12",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "13",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "14",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "15",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "16",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "17",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "18",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "19",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
  {
    id: "20",
    title: "Edifício Luminar",
    description: [
      "Apartamento luxuoso em um dos prédios mais exclusivos da cidade.",
      "Ampla área de estar com acabamentos de alto padrão.",
      "Serviços de concierge e segurança 24 horas.",
      "Tipo: Apartamento",
      "Endereço: Av. das Estrelas 567, Edifício Luminar - CEP 30250670",
      "Metragem: 180m² de área",
      "Preço: R$2.300.000,00",
    ],
    imgCapa: casa1,
    imgCarousel: [casa1, casa2, casa1, casa2, casa1],
  },
];

export default imoveisVendaData;

// <iframe
//   src="https://www.google.com/maps/embed?pb=!4v1691452218176!6m8!1m7!1sI_xgfivqBxQXzhlIC8_UCg!2m2!1d-19.91089089089778!2d-43.98249876271299!3f111.49787297625276!4f1.1830480985877472!5f0.7820865974627469"
//   width="100%"
//   height="320"
//   allowfullscreen=""
//   loading="lazy"
//   key={uuidv4()}
//   rel="noopener noreferrer"
// ></iframe>,

// <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.8293490835147!2d-43.982453343801176!3d-19.911025414224696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696d8ac35baad%3A0x435afaa90c74035!2sR.%20Moema%2C%20113%20-%20Jardim%20Montanh%C3%AAs%2C%20Belo%20Horizonte%20-%20MG%2C%2030810-190!5e0!3m2!1spt-BR!2sbr!4v1691452691464!5m2!1spt-BR!2sbr"
//   width="100%"
//   height="320"
//   key={uuidv4()}
//   allowfullscreen=""
//   loading="lazy"
//   rel="noopener noreferrer"
// ></iframe>,
