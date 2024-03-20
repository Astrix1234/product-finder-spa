import { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import store from '../Zustand/store';
import { Loader } from './Loader/Loader';

const ProductsTable1Page = lazy(
  () => import('../pages/ProductsTable1Page/ProductsTable1Page')
);
const ProductsTable2Page = lazy(
  () => import('../pages/ProductsTable2Page/ProductsTable2Page')
);
const ProductsTable3Page = lazy(
  () => import('../pages/ProductsTable3Page/ProductsTable3Page')
);
const ProductByIdPage = lazy(
  () => import('../pages/ProductByIdPage/ProductByIdPage')
);

function App() {
  const { loading } = store();
  return (
    <div data-testid="app">
      {loading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate replace to="/page-1" />} />
            <Route path="/page-1" element={<ProductsTable1Page />} />
            <Route path="/page-2" element={<ProductsTable2Page />} />
            <Route path="/page-3" element={<ProductsTable3Page />} />
            <Route path="/product/:id" element={<ProductByIdPage />} />
            <Route path="*" element={<ProductsTable1Page />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
