import './App.css';
import Menu from './Components/Menu/Menu.jsx';
import Header from './Components/Header/Header.jsx';
import Home from "./Components/Home/Home.jsx"
import DetailProduct from './Components/DetailProduct/DetailProduct.tsx';
import { Link, Route, Routes,BrowserRouter } from "react-router-dom"
import DetailCategories from './Components/DetailCategories/DetailCategories.tsx';
import Cart from "./Components/Cart/Cart.tsx"
import OffCanvasCart from "./Components/OffCanvas/OffCanvasCart.jsx"
import Checkout from './Components/Checkout/Checkout.tsx';
import Login from "./Components/Login/Login"
import Admin from "./Admin/Admin.jsx"
import DashBoard from "./Admin/Components/DashBoard/DashBoard.jsx";
import ProductManagement from "./Admin/Components/ProductManagement/ProductManagement.jsx";
function App() {
  return (
    <section className="App">
      {/* <Menu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detaiproduct" element={ <DetailProduct/> } />
        <Route path="/detailcategories" element={<DetailCategories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={ <Checkout/> } />
      </Routes>
      <OffCanvasCart></OffCanvasCart> */}
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/" element={<DashBoard />} />
          <Route path="/admin/ProductManagement" element={<ProductManagement />}/>
        </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
        
    </section>
  )
}
export default App;
