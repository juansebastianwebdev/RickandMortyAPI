import { useEffect, useState } from "react";
import "./RickandMortyAPI.css";

export const RickandMortyBuscar = () => {
  const [busqueda, setBusqueda] = useState("");
  const [boton, setBoton] = useState(false);
  const [resultado, setResultado] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetching = async () => {
      if (!busqueda) return;

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${busqueda}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setResultado(data.results || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setResultado([]);
      }
    };
    fetching();
  }, [busqueda, boton]);

  return (
    <main className="flex flex-col gap-5 pb-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="h-8 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-slate-800 rounded-l-lg text-sm px-2 py-1"
          placeholder="search name"
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
        />
        <button
          onClick={() => setBoton(!boton)}
          className="bg-gradient-to-r from-slate-500 to-slate-400 w-16 rounded-r-lg font-semibold hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-100"
        >
          Buscar
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {resultado &&
        resultado.map((element) => (
          <div
            key={element.id}
            className="sombra flex w-[85vh] bg-[#5d5d5d] rounded-lg gap-2"
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
    </main>
  );
};
