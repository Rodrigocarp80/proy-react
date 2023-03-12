
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contacto from './Contacto/Contacto';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <div>
      <BrowserRouter>
            <Carousel/>
            <Navbar/>
           
            <Routes>
                <Route path='/' element={<ProductListContainer/>}/>
                <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
                <Route path='/producto/:id' element={<ProductDetailContainer/>}/>             
                <Route path='/carrito' element={<p>Carrito</p>}/>
                <Route path ='/contacto' element={<Contacto/>}/>
              
            </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
