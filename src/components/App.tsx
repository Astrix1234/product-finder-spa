import { useState, useEffect, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { getProducts, getProductById } from '../Zustand/api';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const ProductsTable1Page = lazy(
  () => import('../pages/ProductsTable1Page/ProductsTable1Page')
);
const ProductByIdPage = lazy(
  () => import('../pages/ProductByIdPage/ProductByIdPage')
);

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   getProducts().then(data => {
  //     setProducts(data);
  //   });
  //   getProductById(7).then(data => {
  //     setProduct(data);
  //   });
  // }, []);

  // console.log(products);
  // console.log(product);
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/page-1" />} />
          <Route path="/page-1" element={<ProductsTable1Page />} />
          <Route path="/product/:id" element={<ProductByIdPage />} />
          <Route path="*" element={<ProductsTable1Page />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
