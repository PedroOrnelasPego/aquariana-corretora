import { v4 as uuidv4 } from "uuid";
import petroleo from "../../assets/commodities/petroleo.png"
import ouro from "../../assets/commodities/ouro.png"
import acucar from "../../assets/commodities/acucar.png"
import frango from "../../assets/commodities/frango.png"
import bovino from "../../assets/commodities/bovino.png"
import milho from "../../assets/commodities/milho.png"
import cafe from "../../assets/commodities/cafe.png"

const data = [
  {
    title: "Derivados de Petróleo",
    body: [
      "Asfalto, combustíveis para aeronaves, combustíveis para navios, coque, gasolina A, gasolina de aviação, GLP, lubrificante, nafta, óleo combustível, óleo diesel, outros não energéticos, parafina, querosene de aviação (QAV), querosene iluminante e solvente.",
    ],
    imageSrc: petroleo,
  },
  {
    title: "Minerais",
    body: [
      "Descritivo dos minerais que temos acesso, de forma mediata e imediata, seja o mineral já extraído, mina ou projeto greenfield (solo):",
      "Ouro:",
      "Minério de ferro",
      "Lítio",
      "Diamante:",
      "Platinóide (cobre):",
      "projeto Niquel:",
      "Mina com projeto",
      "Ou outro mineral específico, poderia ser feita uma busca.",
      "Este é um parágrafo adicional que foi adicionado ao texto.",
    ],
    imageSrc: ouro,
  },
  {
    title: "Açucar",
    body: [
      "O Brasil é o maior produtor mundial de produtos de açúcar e etanol. Nós obtemos nosso açúcar de fábricas de açúcar no Brasil que produzem produtos de açúcar e etanol usados nos mercados local e internacional.",
      "Aproximadamente dois terços do açúcar produzido no Brasil são destinados ao mercado externo. Mais de 100 países ao redor do mundo confiam no açúcar do Brasil com importantes mercados de exportação que incluem China, Federação Russa, Índia, Irã e Emirados Árabes Unidos. Praticamente todas as exportações brasileiras são negociadas em um ambiente de livre mercado.",
      <br key={uuidv4()} />,
      "ICUMSA 45 RBU",
      <br key={uuidv4()} />,
      "O açúcar ICUMSA 45 é o açúcar da mais alta qualidade disponível no mercado atualmente. Ele é um açúcar branco altamente refinado adequado para o consumo humano e para uso em uma ampla gama de aplicações alimentares. É perpetuamente de alta demanda, pois é a forma mais segura de açúcar, devido ao fato de que o processo de refino pelo qual é criado remove as bactérias e contaminantes frequentemente presentes nos açúcares brutos.",
    ],
    imageSrc: acucar,
  },
  {
    title: "Café Arábica",
    body: [
      "O Café Arábica (Coffea Arabica) é o líder de mercado, correspondendo a mais de 60% da produção de café mundial. Isso se deve a sua complexidade de aromas e ao seu sabor mais adocicado, possuindo 50% menos cafeína do que o seu concorrente, robusta.",
      "Os cafés denominados especiais (cafés gourmet) são obrigatoriamente produzidos a partir de grãos Arábica, sendo que dentre as diversas variedades existentes na espécie.",
      "Os cafés tradicionais mais consumidos no Brasil, em sua grande maioria, são uma mistura (blend) destas duas espécies, o que por muitas vezes acaba resultando em um café de qualidade razoável a um custo mais baixo quando comparado com os Cafés Especiais 100% Arábica.",
    ],
    imageSrc: cafe,
  },
  {
    title: "Milho",
    body: [
      "Com quase 100 milhões de toneladas de produção anual, o Brasil é o terceiro maior produtor mundial de milho, depois dos EUA e da China. O Brasil produz milho geneticamente modificado (GMO) e não geneticamente modificado (não GMO), que a proporção de milho transgênico supera em cerca de 90%. Culturas de verão e de inverno são possíveis nas principais áreas de cultivo brasileiras.",
      "Cerca de um terço da produção anual total é exportado. O milho é distinguido como sendo para consumo humano ou animal.",
      "Os países exportadores mais importantes para o milho brasileiro são a Ásia, especialmente a China e a Europa.",
      <br key={uuidv4()} />,
      "Soja GMO – Grade #2",
      <br key={uuidv4()} />,
      "A mais conhecida, cultivada e comercialmente utilizado é a soja transgênica (Organismos Geneticamente Modificados – OGMs). Termo genérico usado para se referir à soja que contém um ou mais genes transferidos através de técnicas de biotecnologia.",
      "A mais conhecida, cultivada e comercialmente utilizado é a soja transgênica (Organismos Geneticamente Modificados – OGMs). Termo genérico usado para se referir à soja que contém um ou mais genes transferidos através de técnicas de biotecnologia.",
      "Proteína 34,5%. Umidade máxima de 14%.",
      <br key={uuidv4()} />,
      "Soja Non GMO",
      <br key={uuidv4()} />,
      "A soja convencional possui tecnologia natural como ferramenta de gestão de alta resistência a doenças, alto potencial produtivo, além de ter produtividade competitiva. Entre os benefícios, o cultivo convencional contribui para a manutenção da biodiversidade e para uma maior conservação do meio ambiente, se utilizado em conjunto com a aplicação de uma gestão integrada.",
      "Teor de proteínas mínimo 34,5%. Teor de óleo 18,5%. Umidade máxima de 14%.",
    ],
    imageSrc: milho,
  },
  {
    title: "Carne Bovina",
    body: [
      "O Brasil lidera o ranking de maior exportador de carne bovina do mundo desde 2008 e as estatísticas mostram crescimento também para os próximos anos.",
      "A cada ano, a participação brasileira no comércio internacional vem crescendo, com destaque para a produção de carne bovina, suína e de frango. Segundo o Ministério da Agricultura, até 2020, a expectativa é que a produção nacional de carnes suprirá 44,5% do mercado mundial. Já a carne de frango terá 48,1% das exportações mundiais e a participação da carne suína será de 14,2%.",
      "Essas estimativas indicam que o Brasil pode manter posição de primeiro exportador mundial de carnes bovina e de frango.",
    ],
    imageSrc: bovino,
  },
  {
    title: "Frango",
    body: [
      "O frango é um tipo de ave domesticada, uma subespécie de ave da selva vermelha. Eles são uma das aves domésticas mais comuns e mais difundidas, com uma população total de mais de 19 bilhões a partir de 2011. Há mais galinhas no mundo do que qualquer outra ave ou ave domesticada. O frango brasileiro está presente nas mesas de consumidores de mais de 150 países. É o maior exportador mundial desde 2004 e o terceiro maior produtor de carne de aves, atrás somente de Estados Unidos e China.",
    ],
    imageSrc: frango,
  },
];

export default data;
