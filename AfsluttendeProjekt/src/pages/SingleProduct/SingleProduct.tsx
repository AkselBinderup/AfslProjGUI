import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SingleProduct.css";

interface Product {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  categoryName: string;
}

export const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("http://dani23g52.web.techcollege.dk/api/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Fejl fetch i singleproduct:", err));
  }, [id]);

  if (!product) return <p>Produkt ikke fundet...</p>;

  return (
    <div className="SingleProductDetailContainer">
      <div className="SingleProductDetailContent">
        <div className="ImgAndBack">
          <button className="BackButton" onClick={() => navigate(-1)}>
            <p>Go back</p>
          </button>
          <div className="SingleProductImageContainer">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="SingleProductDetailImage"
            />
          </div>
        </div>

        <div className="SingleProductInfoContainer">
          <p className="SingleProductCategory">{product.categoryName}</p>
          <h1 className="SingleProductTitle">{product.name}</h1>
          <p className="SingleProductPrice">
            kr. {product.price.toLocaleString("da-DK")},00
          </p>

          <button className="AddToCartButton">Add to cart</button>

          <h3 className="DescriptionTitle">Description</h3>
          <p className="SingleProductDescription">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
