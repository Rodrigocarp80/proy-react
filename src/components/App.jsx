
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { CarritoProvider } from './context/CarritoContext';

import Navbar from './Navbar/Navbar';

import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contacto from './Contacto/Contacto';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Carousel from './Carousel/Carousel';
import Carrito from './Carrito/Carrito';

function App() {
  return (
    <div>
      <CarritoProvider>
      <BrowserRouter>
            <Carousel/>
            <Navbar/>
           
            <Routes>
                <Route path='/' element={<ProductListContainer/>}/>
                <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
                <Route path='/producto/:id' element={<ProductDetailContainer/>}/>             
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path ='/contacto' element={<Contacto/>}/>
              
            </Routes>
      </BrowserRouter>
      </CarritoProvider>
      
      
    </div>
  );
}

export default App;
