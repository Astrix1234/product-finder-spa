import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import store from '../../Zustand/store';
import { getProductById } from '../../Zustand/api';

export default function ProductByIdPage() {
  const { id } = useParams();
  const { productById, setProductById } = store();

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      getProductById(productId).then(data => {
        setProductById(data);
        console.log(data);
      });
    }
  }, [id, setProductById]);

  console.log('product', productById);

  return (
    <div>
      <Helmet>
        <title>Product Finder - Product</title>
      </Helmet>
      <h1>Product</h1>
    </div>
  );
}
