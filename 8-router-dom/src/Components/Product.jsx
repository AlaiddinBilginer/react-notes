import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div className="product-box">
      <h3>Ürün Adı: {product.name}</h3>
      <p>Ürün Fiyatı: {product.price}</p>
      <button className="btn" onClick={() => navigate(`/products/${product.id}`)}>
        Resmi Görüntüle
      </button>
    </div>
  );
}

export default Product;
