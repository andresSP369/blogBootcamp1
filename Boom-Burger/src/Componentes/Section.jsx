import React from 'react';
import   '../Style/section.module.css';
import heroi from '../Imagenes/hero.jpg'
const Section = () => {
    return (    
    
    <section className="card mb-3" id="hero">
    <img src={heroi} id="heroi" className="card-img-top" alt="..."/>
    <section className="card-body">
      <h5 className="card-title">No tiene que ser perfecto, solo hazlo real</h5>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </section>
  </section>
  
  );
};
export default Section;