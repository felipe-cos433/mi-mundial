import { useEffect, useState } from "react";
import TarjetaPais from "./components/TarjetaPais";
import "./App.css";

function App() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/items")   // <-- tu endpoint real
      .then(res => res.json())
      .then(data => setPaises(data.items))
      .catch(err => console.error("Error cargando datos:", err));
  }, []);

  return (
    <div className="container">
      <h1>Ranking FIFA</h1>

      <div className="grid">
        {paises.map((pais) => (
          <TarjetaPais
            key={pais.rango}
            rango={pais.rango}
            nombre={pais.pais}
            puntos={pais.puntos}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
