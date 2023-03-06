
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Contador from './Contador/Contador';
import ProductListContainer from './ProductListContainer/ProductListContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ProductListContainer/>}/>
                <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
                <Route path='/checkout' element={<p>Checkout</p>}/>
                <Route path='/carrito' element={<p>Carrito</p>}/>
            </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
