import { useState, useEffect, useCallback } from 'react';
import scss from './Table.module.scss';
import { Product } from '../../Zustand/store';

interface TableProps {
  pageProducts: Product[];
}

export const Table = ({ pageProducts }: TableProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const backdropClasses = `${scss.backdrop} ${
    !isOpen ? scss.backdropHidden : ''
  }`;

  const handleToggleModal = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, [setIsOpen]);

  const handleRowClick = useCallback(
    (product: Product) => {
      setSelectedProduct(product);
      setTimeout(() => {
        handleToggleModal();
      }, 100);
    },
    [setSelectedProduct, handleToggleModal]
  );

  const handleCloseModal = useCallback(() => {
    handleToggleModal();
    setTimeout(() => {
      setSelectedProduct(null);
    }, 300);
  }, [setSelectedProduct, handleToggleModal]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleCloseModal, isOpen]);

  return (
    <>
      <table className={scss.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>YEAR</th>
          </tr>
        </thead>
        <tbody>
          {pageProducts.map(product => (
            <tr
              key={product.id}
              style={{ backgroundColor: product.color }}
              onClick={() => handleRowClick(product)}
            >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProduct && (
        <div className={backdropClasses} onClick={handleBackdropClick}>
          <div
            className={scss.modal}
            style={{ backgroundColor: selectedProduct.color }}
          >
            <button
              type="button"
              className={scss.button}
              onClick={handleCloseModal}
            >
              x
            </button>
            <h2>Product Details</h2>
            <p>ID: {selectedProduct.id}</p>
            <p>Name: {selectedProduct.name}</p>
            <p>Year: {selectedProduct.year}</p>
            <p>Color: {selectedProduct.color}</p>
            <p>Pantone value: {selectedProduct.pantone_value}</p>
          </div>
        </div>
      )}
    </>
  );
};
