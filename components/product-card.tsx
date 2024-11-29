import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

interface ProductCardProps {
  id: string; // Add product ID
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl }) => {
  const router = useRouter(); // Initialize the router

  const handleQuickView = () => {
    // Redirect to product details page
    router.push(`/shop/product-details/${id}`);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-[300px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(min-width: 208px)"
          className="object-cover w-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
        <Button onClick={handleQuickView}>Quick View</Button>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
