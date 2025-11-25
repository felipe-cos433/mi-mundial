import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import TarjetaPais from "./components/TarjetaPais";
import GraficoTorta from "./components/GraficoTorta";
import GraficoLinea from "./components/GraficoLinea";
import GraficoInventado from "./components/GraficoInventado";
import "./styles/global.css";

function App() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ranking")
      .then(res => res.json())
      .then(data => setPaises(Array.isArray(data.items) ? data.items : []))
      .catch(err => console.error("Error cargando ranking:", err));
  }, []);

  return (
    <div className="app">
      {/* Banner */}
      <Banner />

      {/* Tarjetas de países */}
      <section className="tarjetas-container">
        {paises.map(pais => (
          <TarjetaPais key={pais.rango} pais={pais} />
        ))}
      </section>

      {/* Gráficas */}
      <section className="graficas-container">
        <div className="grafica-card">
          <h2>Distribución de puntos</h2>
          <GraficoTorta paises={paises} />
        </div>
        <div className="grafica-card">
          <h2>Evolución de puntos</h2>
          <GraficoLinea paises={paises} />
        </div>
        <div className="grafica-card">
          <h2>Comparación inventada</h2>
          <GraficoInventado paises={paises} />
        </div>
      </section>
    </div>
  );
}

export default App;
