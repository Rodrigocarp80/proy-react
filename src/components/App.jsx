import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CarritoProvider } from './context/CarritoContext';

import Navbar from './Navbar/Navbar';
import Contador from './Contador/Contador';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contacto from './Contacto/Contacto';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Carrito from './Carrito/Carrito';

function App() {
    return (
        <>
        <CarritoProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ProductListContainer/>} />
                    <Route path='/categoria/:categoria' element={<ProductListContainer/>} />
                    <Route path='/producto/:id' element={<ProductDetailContainer/>} />
                    <Route path='/checkout' element={<p>Checkout</p>} />
                    <Route path='/carrito' element={<Carrito/>} />
                    <Route path='/contacto' element={<Contacto/>} />
                </Routes>
            </BrowserRouter>
        </CarritoProvider>
        </>
    );
}

export default App;
