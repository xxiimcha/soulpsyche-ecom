"use client";
import ProductCard from "@/components/product-card";
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import axios from "axios";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("/api/products/featured");
        setProducts(response.data);
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
      {products.map((product) => (
        <ProductCard
        key={product.id} // Add a unique key here
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.image_url} // Replace with real image logic if applicable
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
