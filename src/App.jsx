import { RickandMortyAPI } from "./components/RickandMortyAPI";
import { RickandMortyBuscar } from "./components/RickandMortyBuscar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { IoHomeSharp, IoSearch } from "react-icons/io5";

function App() {
  return (
    <>
      <Router>
        <main className="flex flex-col">
          <h1 className="self-center text-white text-4xl font-bold mt-2 mb-5">
            Rick and Morty API
          </h1>
          <nav className="flex justify-center gap-4 mb-5">
            <Link to="/" className="text-white font-bold bg-[#141414] p-1 rounded-lg flex items-center gap-1">
            <IoHomeSharp size={18} />
              Home
            </Link>
            <Link to="/buscar" className="text-white font-bold bg-[#141414] p-1 rounded-lg flex items-center gap-1">
            <IoSearch size={18} />
              Buscar
            </Link>
          </nav>
          <div className="flex flex-wrap justify-center items-center gap-5 mt-2">
            <Routes>
              <Route path="/" element={<RickandMortyAPI />}></Route>
              <Route path="/buscar" element={<RickandMortyBuscar />}></Route>
            </Routes>
          </div>
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;
