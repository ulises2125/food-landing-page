import React from "react";
import "./Catalog.scss";

const mockProducts = [
  {
    id: 1,
    name: "Pizza Margarita",
    price: "12.000",
    image: "/images/pizza-margarita.jpg",
  },
  {
    id: 2,
    name: "Ensalada César",
    price: "4.500",
    image: "/images/ensalada-cesar.jpg",
  },
  {
    id: 3,
    name: "Tacos",
    price: "10.000",
    image: "/images/tacos-al-pastor.jpg",
  },
  {
    id: 4,
    name: "Hamburguesa simple",
    price: "7.000",
    image: "/images/hamburguesa.jpg",
  },
  {
    id: 5,
    name: "Empanadas",
    price: "11.000",
    image: "/images/empanadas.jpg",
  },
];

const Catalog = () => {
  return (
    <div className="catalog">
      <h2>Catálogo de Productos</h2>
      <div className="product-list">
        {mockProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
