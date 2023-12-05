import { useRef, useEffect } from "react";

const ModalSchedule = ({sede, t}) => {
  const popupRef = useRef(null);

  const handleHorarios = () => {
    const div = document.getElementById(sede);
    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        const div = document.getElementById(sede);
        div.classList.add("hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <section
      id="modal-schedules"
      className="flex flex-col items-center m-auto h-full w-full"
    >
      <button
        className="bg-[#f37032] p-2 mt-2 w-36 justify-center h-8 items-center rounded text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
        onClick={handleHorarios}
      >
        <span>{t.button.horarios}</span>
      </button>
      <div
        id={sede}
        ref={popupRef}
        className="absolute hidden flex-col popup overflow-hidden rounded inset-x-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl lg:pb-0 bg-white z-20 w-full md:w-1/2"
      >
        <div className="m-auto pt-0 text-center sm:pt-2 pb-4 w-9/12">
          <div className="flex row items-center font-semibold justify-center w-full">
            <div className="flex sm:w-1/3 justify-end ml-auto">
              <span className="pb-2 cursor-pointer" onClick={handleHorarios}>
                X
              </span>
            </div>
          </div>
          <div className="items-center justify-center flex">
            <img
              alt="Horarios"
              src={`/images/Horarios${sede}.jpg`}
              className="inset-0 rounded-md object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalSchedule;
