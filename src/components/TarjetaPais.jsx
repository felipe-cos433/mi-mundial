import React from 'react';

export default function TarjetaPais({ pais }) {
  return (
    <div className="tarjeta" style={{ borderColor: pais.color }}>
      <div className="bandera">{pais.bandera}</div>
      <h3>{pais.nombre}</h3>
      <div className="color" style={{ backgroundColor: pais.color }}></div>
    </div>
  );
}
