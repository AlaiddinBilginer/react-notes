import React from 'react';
import { products } from '../Data/products';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="product-detail">
      {products &&
        products.map((product) => {
          if (id == product.id) {
            return (
              <div>
                <h3>{product.name}</h3>
                <img src={product.image} alt="Product Image" />
              </div>
            );
          }
        })}
    </div>
  );
}

export default ProductDetail;
