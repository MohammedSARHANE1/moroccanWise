import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage'
import Pricing from './pages/pricing/Pricing'
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import AppLayout from './pages/appLayout/AppLayout';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/App' element={<AppLayout/>}>
           <Route path='cities' element={<p> list of cities</p>}/>
            <Route path='countries' element={<p> list of contries</p>}/>
            <Route path='form' element={<p> Form</p>}/>
          </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
