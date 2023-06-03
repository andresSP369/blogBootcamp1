import Icon from "../imagenes/Icon.png";
import Navbarestilo from "../Style/Navbar.module.css";
import React, { useState } from "react";
import Home from "../Page/Home";
import NuevoArticulo from "../Page/NuevoArticulo";
import DetalleArticulo from "../Page/DetalleArticulo";
import Sobrenosotros from "../Page/Sobrenosotros";
const Navbar = (props) => {
  const handleTabClick = (tabName) => {
    if (tabName === "Home") {
      props.setRedirect(<Home />);
    }
    if (tabName === "Catalogo") {
      props.setRedirect( <DetalleArticulo ActualizarArt={props.ActualizarArt} />);

    }

    if (tabName === "Nuevo Articulo") {
        props.setRedirect(<NuevoArticulo ActualizarArt={props.ActualizarArt} />);
      }
    if (tabName === "Nosotros") {
        props.setRedirect(<Sobrenosotros />);
      }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <nav className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Icon}
            alt="Logo"
            width="70"
            height="30"
            className="d-inline-block align-text-top"
          />
          Boom Burger
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" onClick={()=>handleTabClick("Home")} aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="Nuevo" onClick={()=> handleTabClick("Nuevo Articulo")}>
              Nuevo Articulo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="Catalogo"
              onClick={()=> handleTabClick("Catalogo")}
              href="#"
            >
              Catalogo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={()=> handleTabClick("Nosotros")}>
              Sobre Nosotros
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
