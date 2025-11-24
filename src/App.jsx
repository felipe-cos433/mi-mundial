import React from 'react';
import TarjetaPais from './components/TarjetaPais';
import './App.css';

const paises = [
  { nombre: "Argentina", color: "#75AADB", bandera: "🇦🇷" },
  { nombre: "Brasil", color: "#FEDF00", bandera: "🇧🇷" },
  { nombre: "Alemania", color: "#000000", bandera: "🇩🇪" },
  { nombre: "Francia", color: "#0055A4", bandera: "🇫🇷" },
  { nombre: "España", color: "#C60B1E", bandera: "🇪🇸" },
  { nombre: "Italia", color: "#009246", bandera: "🇮🇹" },
  { nombre: "Inglaterra", color: "#FFFFFF", bandera: "🏴" },
  { nombre: "Portugal", color: "#006600", bandera: "🇵🇹" },
  { nombre: "México", color: "#006847", bandera: "🇲🇽" },
  { nombre: "Uruguay", color: "#75AADB", bandera: "🇺🇾" },
  { nombre: "Países Bajos", color: "#FF6600", bandera: "🇳🇱" },
  { nombre: "Bélgica", color: "#FFD700", bandera: "🇧🇪" },
  { nombre: "Croacia", color: "#FF0000", bandera: "🇭🇷" },
  { nombre: "Suiza", color: "#FF0000", bandera: "🇨🇭" },
  { nombre: "Suecia", color: "#FFCC00", bandera: "🇸🇪" },
  { nombre: "Japón", color: "#BC002D", bandera: "🇯🇵" },
  { nombre: "Corea del Sur", color: "#003478", bandera: "🇰🇷" },
  { nombre: "Estados Unidos", color: "#B22234", bandera: "🇺🇸" },
  { nombre: "Australia", color: "#00247D", bandera: "🇦🇺" },
  { nombre: "Costa Rica", color: "#002868", bandera: "🇨🇷" },
];

export default function App() {
  return (
    <div className="app">
      <header className="banner">
        <h1>Mundial de Fútbol 2026</h1>
        <p>Explora los 20 equipos seleccionados y conoce los colores de sus uniformes.</p>
      </header>

      <div className="tarjetas-container">
        {paises.map((pais, index) => (
          <TarjetaPais key={index} pais={pais} />
        ))}
      </div>
    </div>
  );
}
