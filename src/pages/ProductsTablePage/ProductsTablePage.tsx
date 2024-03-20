import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import store from '../../Zustand/store';
import { getProducts } from '../../Zustand/api';
import { toast } from 'react-toastify';
import { Table } from '../../components/Table/Table';

export default function ProductsTablePage() {
  const { no } = useParams();
  const { pageProducts, setPageProducts, setLoading } = store();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        if (no) {
          const pageNumber = parseInt(no, 10);
          const totalPages = 3;

          if (pageNumber <= totalPages && pageNumber > 0) {
            const data = await getProducts(pageNumber, 5);
            setPageProducts(data);
          } else {
            toast.error('Bed request, page not found');
            return <Navigate to={'/page/1'} />;
          }
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
    fetchProducts();
  }, [setPageProducts, setLoading, no]);

  const totalPages = 3;
  if (no) {
    const pageNumber = parseInt(no, 10);
    if (pageNumber > totalPages) {
      return <Navigate to={'/page/1'} />;
    }
  }

  return (
    <>
      <Helmet>
        <title>Product Finder - Page {no || 'No Page'}</title>
      </Helmet>
      <Table pageProducts={pageProducts} />
    </>
  );
}
