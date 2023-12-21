import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage'
import Pricing from './pages/pricing/Pricing'
import Product from './pages/product/Product';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
