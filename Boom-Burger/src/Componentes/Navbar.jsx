import Icon from "../imagenes/Icon.png";
import Navbarestilo from "../Style/Navbar.module.css";
import React, { useState } from "react";
import Home from "../Page/Home";
import NuevoArticulo from "../Page/NuevoArticulo";
import DetalleArticulo from "../Page/DetalleArticulo";
const Navbar = (props) => {
  const handleTabClick = (tabName) => {
    if (tabName === "Home") {
      props.setRedirect(<Home />);
    }
    if (tabName === "Catalogo") {
      props.setRedirect(<DetalleArticulo/>);
    }
    if (tabName === "Nuevo Articulo") {
        props.setRedirect(<NuevoArticulo/>);
      }
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <nav class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={Icon}
            alt="Logo"
            width="70"
            height="30"
            class="d-inline-block align-text-top"
          />
          Boom Burger
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" onClick={()=>handleTabClick("Home")} aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="Nuevo" onClick={()=> handleTabClick("Catalogo")}>
              Nuevo Articulo
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="Catalogo"
              onClick={()=> handleTabClick("Nuevo Articulo")}
              href="#"
            >
              Catalogo
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sobre Nosotros
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
