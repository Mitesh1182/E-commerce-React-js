import './App.css';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';

import LoginSignUp from './Pages/LoginSignUp';
import { useRoutes } from "react-router-dom";
import Womanproduct from './Pages/Womanproduct';
import KidsProduct from './Pages/KidsProduct';
import Populer from './Componant/Populer/Populer';



export default function App() {


  let element = useRoutes([
    {
      path: "/",
      element: <Shop />,
    },
    {
      path: "Mens",
      element: <Populer/>,
    },
    {
      path: "Womanproduct",
      element: <Womanproduct/>,
    },
    {
      path: "KidsProduct",
      element: <KidsProduct/>,
    },
    {
      path: "Product",
      element: <Product/>,
    },
    {
      path: "LoginSignUp",
      element: <LoginSignUp />
    },
    {
      path: "Populer",
      element: <Populer/>
    },
  ]);
  return (
 
    element
    // <div >

    //   <BrowserRouter>
    //     <NavbarSite />
    //     <Slidebar />
    //     <Routes>
    //       <Route path='/' element={<Shop />} />
    //       <Route path='/Slidebar' element={<Slidebar />} />
    //       <Route path='/Mens' element={<Shopcategory category="men" />} />
    //       <Route path='/womens' element={<Shopcategory category="women" />} />
    //       <Route path='/Kids' element={<Shopcategory category="kid" />} />
    //       <Route path='/Product' element={<Product />}>
    //         <Route path=':productId' element={<Product />}></Route>

    //       </Route>
    //       <Route path='/cart' element={<Cart />} />
    //       <Route path='/LoginSignUp' element={<LoginSignUp />} />


    //     </Routes>

    //   </BrowserRouter>
    // </div>
  );
}