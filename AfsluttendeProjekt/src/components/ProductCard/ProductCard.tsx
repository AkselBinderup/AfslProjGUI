import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
}) => {
  const navigateToProduct = useNavigate();
  return (
    <div
      className="ProductCard"
      onClick={() => navigateToProduct("/product/" + id)}
    >
      <div className="ProductImageContainer">
        <img src={image} alt={title} className="ProductImage" />
      </div>
      <div className="ProductInfo">
        <h3>{title}</h3>
        <p className="ProductPrice">kr. {price}</p>
      </div>
    </div>
  );
  console.log(id);
};
