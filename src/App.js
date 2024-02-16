import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/grocery' element={<ShopCategory category="grocery"/>}/>
        <Route path='/items' element={<ShopCategory category="items"/>}/>
        <Route path='/fashion' element={<ShopCategory category="fashion"/>}/>
        <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
        <Route/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
