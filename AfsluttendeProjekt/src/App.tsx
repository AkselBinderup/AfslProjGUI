import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home/Home";
import { Accessories } from "./pages/Accessories/Accessories";
import { Jackets } from "./pages/Jackets/Jackets";
import { Pants } from "./pages/Pants/Pants";
import { Shoes } from "./pages/Shoes/Shoes";
import { Tops } from "./pages/Tops/Tops";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { AllProducts } from "./pages/AllProducts/AllProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/tops" element={<Tops />} />
            <Route path="product/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
