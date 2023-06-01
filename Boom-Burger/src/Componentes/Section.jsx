import React from 'react';
import   '../Style/section.module.css';
import heroi from '../Imagenes/hero.jpg'
const Section = () => {
    return (    
    
    <section class="card mb-3" id="hero">
    <img src={heroi} id="heroi" class="card-img-top" alt="..."/>
    <section class="card-body">
      <h5 class="card-title">No tiene que ser perfecto, solo hazlo real</h5>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </section>
  </section>
  
  );
};
export default Section;