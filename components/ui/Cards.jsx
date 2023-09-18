import { useState } from "react";

function ExpandableCards() {
  const [cardExpanded, setCardExpanded] = useState(false);

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div
        className={`w-full lg:w-1/4 px-4 mb-8 ${
          cardExpanded ? "lg:mb-0" : ""
        }`}
      >
        <div
          className={`bg-white rounded-lg shadow-md overflow-hidden ${
            cardExpanded ? "h-96" : "h-48"
          }`}
        >
          <img
            className={`h-full w-full object-cover transition-transform duration-500 ${
              cardExpanded ? "scale-125" : ""
            }`}
            src="https://source.unsplash.com/random/400x400"
            alt="Card Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ac quam nec felis feugiat congue.
            </p>
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
              onClick={() => setCardExpanded(!cardExpanded)}
            >
              {cardExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>

      {/* Repeat this card 3 more times to create a total of 4 cards */}
    </div>
  );
}

export default ExpandableCards;