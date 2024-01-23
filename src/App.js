import './App.css';
import NavbarSite from './Componant/Navbarpage/NavbarSite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Slidebar from './Pages/Slidebar';



function App() {
  return (
    <div >
   
      <BrowserRouter>
 
        <NavbarSite />
        <Slidebar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Mens' element={<Shopcategory category="men"/>}/>
          <Route path='/womens' element={<Shopcategory category="women"/>}/>
          <Route path='/Kids' element={<Shopcategory category="kid"/>}/>
          <Route path='/Product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}></Route>

          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/LoginSignUp' element={<LoginSignUp/>}/>
            
        
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
