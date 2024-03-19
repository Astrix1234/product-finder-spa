import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import store from '../../Zustand/store';
import { getProducts } from '../../Zustand/api';
import { toast } from 'react-toastify';
import { Table } from '../../components/Table/Table';

export default function ProductsTable1Page() {
  const { pageProducts, setPageProducts, setLoading } = store();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(1, 5);
        setPageProducts(data);
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
    fetchProducts();
  }, [setPageProducts, setLoading]);

  return (
    <>
      <Helmet>
        <title>Product Finder - Page First</title>
      </Helmet>
      <Table pageProducts={pageProducts} />
    </>
  );
}
