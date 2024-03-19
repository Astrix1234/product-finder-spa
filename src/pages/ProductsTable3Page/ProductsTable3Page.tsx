import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import store from '../../Zustand/store';
import { getLastTwoProductsOnLastPage } from '../../Zustand/api';
import { toast } from 'react-toastify';
import { Table } from '../../components/Table/Table';

export default function ProductsTable3Page() {
  const {
    lastTwoProductsOnLastPage,
    setLastTwoProductsOnLastPage,
    setLoading,
  } = store();

  useEffect(() => {
    const fetchLastProducts = async () => {
      setLoading(true);
      try {
        const data = await getLastTwoProductsOnLastPage();
        setLastTwoProductsOnLastPage(data);
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
    fetchLastProducts();
  }, [setLastTwoProductsOnLastPage, setLoading]);

  return (
    <>
      <Helmet>
        <title>Product Finder - Page Third</title>
      </Helmet>
      <Table pageProducts={lastTwoProductsOnLastPage} />
    </>
  );
}
