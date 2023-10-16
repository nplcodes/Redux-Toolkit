import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
    "https://www.apple.com/v/macbook-air-m1/e/images/meta/macbook-air_overview__15sjf4iagj6q_og.png",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://ecommerce.datablitz.com.ph/cdn/shop/products/11_Legion_5_Hero_Front_Semi_Closed_5f84b731-e08e-4742-99b2-986d63867ece_1024x.png?v=1676852920",
    price: 25,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://www.digitaltrends.com/wp-content/uploads/2022/08/dell-latitude-7330-ul-rear-view-e1659549844358.jpg?p=1",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06912360.png",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
