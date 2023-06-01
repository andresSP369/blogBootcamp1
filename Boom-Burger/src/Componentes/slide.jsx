    import 'bootstrap/dist/css/bootstrap.css';
    import React from 'react';
    import sl1 from '../imagenes/sl1.jpg';
    import sl2 from '../imagenes/sl2.jpg';
    import sl3 from '../imagenes/sl3.jpg';
    const Slide = () => {
        return (  <section style={{display:"flex", justifyContent:"center",  border:"solid 1.8px rgba(0, 0, 0, 0.150)", borderRadius:"0.3rem"  }} className='container-slide'> 
            <section style={{width:"70%", height:"90%"}}id="carouselExampleCaptions" className="carousel slide">
            <section className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </section>
            <section id="container-imge" className="carousel-inner">
              <section  className="carousel-item active">
                <img src={sl1} className="d-block w-100" id="sl1d" style={{ objectFit: 'cover', height: '400px',scale:"" }}/>
                <section className="carousel-caption d-none d-md-block">
                  <h5>Hamburguesa con carne</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </section>
              </section>
              <section className="carousel-item">
                <img src={sl2} className="d-block w-100" alt="..." id="sl2d" style={{ objectFit: 'cover', height: '200px' }}/>
                <section className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </section>
              </section>
              <section className="carousel-item">
                <img src={sl3} className="d-block w-100" alt="..." id="sl3d" style={{ objectFit: 'cover', height: '200px' }}/>
                <section className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </section>
              </section>
            </section>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </section>
          </section> 
    );
    };
    export default Slide;