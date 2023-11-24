import React from "react";
import { useRouter } from "next/router";
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";

const locations = {
  acassuso: { name: "Acassuso", latitud: -34.4818844, longitud: -58.503765 },
  beccar: { name: "Beccar", latitud: -34.4581757, longitud: -58.5139465 },
  vicenteLopez: { name: "Vicente Lopez", latitud: -34.5331572, longitud: -58.481126 },
};

const MapCards = ({map}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const handleMapChange = (barrio) => {
    setZoom(15.5);
    console.log('entre')
    let location = {"name": locations[barrio].name, "lat": locations[barrio].latitud, "lon": locations[barrio].longitud}
    map.setCenter(location)
  };

  return (
    <div className="max-container padding-container w-full justify-end grid gap-4 grid-cols-2">
      <div></div>
      <div className="flex flex-1 gap-3 flex-wrap justify-around">
        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => handleMapChange("acassuso")}>
          <img
            className="w-full"
            src="https://www.clarin.com/img/2020/07/26/CwbkoO97D_1256x620__1.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => handleMapChange("acassuso")}>
          <img
            className="w-full"
            src="https://www.clarin.com/img/2020/07/26/CwbkoO97D_1256x620__1.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => handleMapChange("acassuso")}>
          <img
            className="w-full"
            src="https://www.clarin.com/img/2020/07/26/CwbkoO97D_1256x620__1.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCards;
