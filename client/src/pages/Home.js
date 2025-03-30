import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import '../assets/styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default Home;
