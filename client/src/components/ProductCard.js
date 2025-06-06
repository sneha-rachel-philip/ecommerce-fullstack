import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <Link to={`/product/${product._id}`}>View Details</Link>
  </div>
);

export default ProductCard;
