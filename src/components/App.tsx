import { useState, useEffect } from 'react';
import { getProducts, getProductById } from '../Zustand/api';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
    getProductById(7).then(data => {
      setProduct(data);
    });
  }, []);

  console.log(products);
  console.log(product);
  return (
    <div>
      <h1>Hello Word</h1>
    </div>
  );
}

export default App;
