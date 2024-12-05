"use client";
import ProductCard from "@/components/product-card";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: string | null; // Allow null to handle cases where id might be missing
  name: string;
  price: number;
  description: string;
  image_url?: string;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("/api/products/featured");
        const productsWithUniqueIds = response.data.map((product: Product, index: number) => ({
          ...product,
          id: product.id || `temp-product-${index}`, // Fallback if id is missing
        }));
        setProducts(productsWithUniqueIds);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) return <p>Loading featured products...</p>;
  if (products.length === 0) return <p>No featured products available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id || `product-${index}`} // Fallback to index-based key
          id={product.id || `temp-product-${index}`} // Pass unique ID even if missing
          name={product.name}
          price={product.price}
          imageUrl={product.image_url ?? "/placeholder-image.png"} // Provide fallback for image
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
