import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import store from '../../Zustand/store';
import { getProducts, getLastProductOnFirstPage } from '../../Zustand/api';
import { toast } from 'react-toastify';
import { Table } from '../../components/Table/Table';

export default function ProductsTable2Page() {
  const {
    pageProducts,
    lastProductOnFirstPage,
    setPageProducts,
    setLastProductOnFirstPage,
    setLoading,
  } = store();

  useEffect(() => {
    let errorOccurred = false;

    const fetchLastProductOnFirstPage = async () => {
      try {
        const data = await getLastProductOnFirstPage();
        setLastProductOnFirstPage(data);
      } catch (error) {
        console.error(error);
        errorOccurred = true;
        if (error instanceof Error && error.message) {
          toast.error(error.message);
        } else {
          toast.error('An error occurred');
        }
      }
    };

    const fetchProducts = async () => {
      try {
        const data = await getProducts(2, 5);
        const slicedData = data.slice(1);
        setPageProducts(slicedData);
      } catch (error) {
        console.error(error);
        if (!errorOccurred) {
          if (error instanceof Error && error.message) {
            toast.error(error.message);
          } else {
            toast.error('An error occurred');
          }
        }
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchLastProductOnFirstPage();
      await fetchProducts();
      setLoading(false);
    };

    fetchData();
  }, [setPageProducts, setLoading, setLastProductOnFirstPage]);

  const pageProductsNext = lastProductOnFirstPage
    ? [lastProductOnFirstPage, ...pageProducts]
    : pageProducts;

  return (
    <>
      <Helmet>
        <title>Product Finder - Page Second</title>
      </Helmet>
      <Table pageProducts={pageProductsNext} />
    </>
  );
}
