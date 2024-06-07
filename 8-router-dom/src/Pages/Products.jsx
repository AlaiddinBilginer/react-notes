import React from 'react';
import { products } from '../Data/products.jsx';
import Product from '../Components/Product';

function Products() {
  return (
    <div className="products-page">
      <h1>Ürünler</h1>
      <div className="products">
        {products && products.map((product) => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Products;
