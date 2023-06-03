import React, { useState } from 'react';
import FormularioHamburguesa from './FormularioHamburguesa';

const Mostrar = () => {
  const [hamburguesa, setHamburguesa] = useState(null);

  const guardarHamburguesa = (datos) => {
    setHamburguesa(datos);
  };

  return (
    <section>
      <h1>Crear una nueva hamburguesa</h1>
      <FormularioHamburguesa guardarHamburguesa={guardarHamburguesa} />
      {hamburguesa && (
        <section>
          <h2>Hamburguesa creada:</h2>
          <p>Nombre: {hamburguesa.nombre}</p>
          <p>Descripción: {hamburguesa.descripcion}</p>
          <p>Fecha de publicación: {hamburguesa.fecha}</p>
          <img src={hamburguesa.imagen} alt="Hamburguesa" />
        </section>
      )}
    </section>
  );
};

export default Mostrar;