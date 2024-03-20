import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import store from '../../Zustand/store';
import { getProductById } from '../../Zustand/api';
import { toast } from 'react-toastify';
import { Table } from '../../components/Table/Table';

export default function ProductByIdPage() {
  const { id } = useParams();
  const { productById, setProductById, setLoading } = store();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        if (id) {
          const productId = parseInt(id, 10);
          const data = await getProductById(productId);
          setProductById(data);
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error && error.message) {
          toast.error(error.message);
        } else {
          toast.error('An error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, setProductById, setLoading]);

  const totalId = 12;
  if (id) {
    const productId = parseInt(id, 10);
    if (productId > totalId) {
      return <Navigate to={'/page/1'} />;
    }
  }

  return (
    <>
      <Helmet>
        <title>Product Finder - Product {id}</title>
      </Helmet>
      <Table pageProducts={productById} />
    </>
  );
}
