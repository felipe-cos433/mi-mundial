export default function TarjetaPais({ rango, nombre, puntos }) {
  return (
    <div className="card">
      <h2>{rango}. {nombre}</h2>
      <p>Puntos: {puntos}</p>
    </div>
  );
}
