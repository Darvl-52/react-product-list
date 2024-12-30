import {Route, Routes} from "react-router";
import {ProductPage} from "../pages/productPage/page.tsx";
import {ProductInfo} from "../pages/productInfo/page.tsx";
import {Layout} from "../widgets/Layout/Layout.tsx";
import {CreateProduct} from "../pages/createProduct/page.tsx";

export function App() {
  return (
      <Routes>
          <Route path='/' element={ <Layout/> }>
              <Route index path='/products' element={ <ProductPage/> } />
              <Route path='/products/:id' element={ <ProductInfo/> } />
              <Route path='/create-product' element={ <CreateProduct/> } />
          </Route>
      </Routes>
  )
}