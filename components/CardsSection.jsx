import { useState } from "react";

const cards = [
  {
    id: 1,
    discount: "10",
    title: "SURFHOUSE",
    content: "WELLNESS, SURFSHOP*, KANDUI BAR**",
  },
  {
    id: 2,
    discount: "15",
    title: "SURF TRIPS",
    content: "SURFCAMPS, SURFTRIPS, TRIPS INT.",
  },
  {
    id: 3,
    discount: "10",
    title: "AP HOSTEL",
    content: "HOSPEDAJE",
  },
  {
    id: 4,
    discount: "15",
    title: "ESCUELA SURF",
    content: "CLASES DE SURF",
  },
];

const Card = ({ card, toggle }) => {

  return (
    <div className="transform  rounded-lg hover:scale-105 overflow-hidden w-full max-w-sm  bg-white text-black font-montBold">
      <div className="p-2 md:p-3 flex items-center justify-center ">
        <h2 className=" font-archivoBlack text-lg lg:text-xl text-center text-[#e33d20]">
          {card.title}{" "}
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-1 justify-items-center">
        <div class="text-5xl  font-archivoBlack">{card.discount}%</div>
        <div class="text-sm items-center text-center">
          {t.beneficios.descuento}
        </div>
        <div class="text-sm items-center text-center p-1">{card.content}</div>
      </div>
    </div>
  );
};

const CardsSection = () => {
  const [cardsState, setCardsState] = useState(cards);

  const toggleCard = (id) => {
    setCardsState(
      cardsState.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );
  };

  return (
    <section className="py-2 md:py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cardsState.map((card) => (
            <Card key={card.id} card={card} toggle={toggleCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
