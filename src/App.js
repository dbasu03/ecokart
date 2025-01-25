
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
//import Shop1 from './Pages/Shop1';
//import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
//import Grocery from './Pages/Grocery';//new change
import Shop1 from './Pages/Shop1';
import Shop2 from './Pages/Shop2';
import Topic1 from './Pages/Topic1';

function App() {
  return (
    
  <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/grocery' element={<LoginSignup/>}/>     {/*{<Shop1/>} />*/}
        <Route path='/fashion' element={<LoginSignup/>}/>        {/*{<Shop2/>}/> */}
        <Route path='/living' element={<LoginSignup/>}/>
        <Route path='/new' element={<Topic1/>}/>  {/*just for test*/}
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
  </div>
  );
}


export default App;
