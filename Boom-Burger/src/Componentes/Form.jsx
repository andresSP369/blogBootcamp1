import React from 'react';
import   '../Style/form.module.css';
const Form = () => {
    return (
        
        <form className="my-form">
        <div className="form-row">
            <h1>Contactos</h1>
            <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Nombre Completo</label>
            <input type="name" className="form-control" id="inputEmail4" placeholder="Nombre" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Correo</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  );
};
export default Form;