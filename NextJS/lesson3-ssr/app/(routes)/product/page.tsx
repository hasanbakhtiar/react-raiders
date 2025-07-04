import React from 'react';
import Link from 'next/link';
const productList = [
  {
    id: 1,
    title: 'Asus Laptop',
    slug:'asus-laptop',
    price: 2500,
  },
  {
    id: 2,
    title: 'Acer Laptop',
    slug: 'acer-laptop',
    price: 2700,
  },
  {
    id: 3,
    title: 'MSI Laptop',
    slug: 'msi-laptop',
    price: 3500,
  },
];
const Product = () => {
  return (
    <div>
      {productList.map((item) => (
        <div key={item.id}>
          <Link href={`product/${item.slug}`}>
            <li>{item.title}</li>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
