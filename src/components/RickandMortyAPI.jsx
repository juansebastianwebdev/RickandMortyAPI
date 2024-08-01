import { useEffect, useState } from "react";
import "./RickandMortyAPI.css";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

export const RickandMortyAPI = () => {
  const [personaje, setPersonaje] = useState([]);
  const [pagina, setPagina] = useState(1);
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pagina}`
      );
      const data = await response.json();
      setPersonaje(data.results);
    };
    fetching();
  }, [pagina]);

  const ManejarBoton = (newPage) => {
    if (newPage < 1) {
      return;
    }
    if (newPage > 42) {
      return;
    }
    setPagina(newPage);
  };

  return (
    <>
      <div className="flex justify-around items-center w-full h-28 bg-[#141414]">
        <button
          className="bg-gradient-to-r from-[#1b1843] via-[#3830a3] to-[#4438ca] w-28 h-10 rounded-lg flex justify-center items-center font-bold"
          onClick={() => ManejarBoton(pagina - 1)}
        >
          <IoIosArrowBack size={24} />
          <span>Anterior</span>
        </button>
        <button
          className="bg-gradient-to-r from-[#1b1843] via-[#3830a3] to-[#4438ca] w-28 h-10 rounded-lg flex justify-center items-center font-bold"
          onClick={() => ManejarBoton(pagina + 1)}
        >
          <span>Siguiente</span>
          <IoIosArrowForward size={24} />
        </button>
      </div>
      {personaje &&
        personaje.map((element) => (
          <div
            key={element.id}
            className="sombra flex w-[85vh] bg-[#5d5d5d] rounded-lg gap-2 mx-2"
          >
            <img src={element.image} alt="" className="rounded-l-lg w-[45%]" />
            <div className="flex flex-col justify-evenly">
              <h3 className="text-white font-bold text-2xl">{element.name}</h3>
              <h3 className="flex items-center gap-2 text-white font-bold">
                <div
                  className={`w-2 h-2 rounded-full ${
                    element.status == "Alive" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                {element.status} - {element.species}
              </h3>
              <div>
                <h6 className="font-bold opacity-60 text-lg">
                  Última Ubicación:
                </h6>
                <h4 className="text-white font-semibold">
                  {element.location.name}
                </h4>
              </div>
              <div>
                <h6 className="font-bold opacity-60 text-lg">
                  Visto Por Primera Vez:
                </h6>
                <h4 className="text-white font-semibold">
                  {element.origin.name}
                </h4>
              </div>
            </div>
          </div>
        ))}
      <div className="w-screen h-1/3 flex justify-end p-3">
        <a href="#">
          <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center active:bg-transparent active:text-white">
          <IoIosArrowUp size={24} />
          </button>
        </a>
      </div>
    </>
  );
};
