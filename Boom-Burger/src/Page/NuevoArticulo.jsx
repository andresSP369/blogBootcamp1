import Crear from "../Componentes/Crear";

import React from "react";



function NuevoArticulo(props) {
    return (
    <section>
    <Crear ActualizarArt={props.ActualizarArt} />

   
    
    </section>
    );
}

export default NuevoArticulo;