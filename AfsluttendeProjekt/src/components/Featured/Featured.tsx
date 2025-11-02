import React, { useEffect, useState } from "react";
import "./Featured.css";
import { ProductCard } from "../ProductCard/ProductCard";

interface Product {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  categoryName: string;
}

interface FeaturedProductsProps {
  rows?: number;
  columns?: number;
  category?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  rows = 2,
  columns = 3,
  category,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  // https://stackoverflow.com/questions/69364075/how-to-async-fetch-data-in-useeffect?utm_source=chatgpt.com

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://dani23g52.web.techcollege.dk/api/products?pageNumber=1&pageSize=100"
        );
        const data: Product[] = await res.json();

        const filtered = category
          ? data.filter(
              (p) => p.categoryName.toLowerCase() === category.toLowerCase()
            )
          : data;

        setProducts(filtered.slice(0, rows * columns));
      } catch (err) {
        console.error("Error fetching featured products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [rows, columns, category]);
  
  
  if (loading) return <p>Loading</p>;

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat("+columns+", 1fr)",
    justifyItems: "center",
  };

  return (
    <section className="FeaturedProductsSection">
      <h2 className="FeaturedTitle">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Featured Products"}
      </h2>

      <div className="ProductGrid" style={gridStyle}>
        {products.map((p) => (
          <ProductCard
            key={p.productId}
            id={p.productId}
            image={p.imageUrl}
            title={p.name}
            price={p.price.toString()}
          

          />
        ))}
      </div>
    </section>
  );
};
