const TarjetaPais = ({ pais }) => (
  <div className="tarjeta">
    <div className="tarjeta-header">
      <h3>{pais.pais}</h3>
      <span>#{pais.rango}</span>
    </div>
    <div className="tarjeta-body">
      <p>Puntos: <strong>{pais.puntos}</strong></p>
    </div>
  </div>
);

export default TarjetaPais;
