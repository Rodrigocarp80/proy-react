import React from 'react';
import Secciones from './Secciones/Secciones';
import Carrito from './Carrito/Carrito';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                        
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                         </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Secciones/>  
                        <Carrito/>          
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;
