import React from 'react';

// Reactta "props" (properties), componentler arasında veri aktarımını sağlayan araçlardır. Bir üst bileşenden alt bileşene veri geçişini mümkün kılarlar. Bu sayede bileşenler arasında dinamik veri akışı sağlanabilir ve bileşenler daha esnek ve yeniden kullanılabilir hale gelir.

function Product({ product }) {
  return (
    <div>
      <h1>Product</h1>

      {product.map((item, index) => (
        <div key={index}>
          <h2>Name: {item.name}</h2>
          <p>Price: {item.price} TL</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
