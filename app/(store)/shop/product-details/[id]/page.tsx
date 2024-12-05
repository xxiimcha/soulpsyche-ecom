"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  colors: {
    id: string;
    color: string;
    images: string[]; // Array of images for each color
    sizes: { id: string; label: string; stock: number }[];
  }[];
};

export default function ProductDetailsPage() {
  const { id } = useParams(); // Get product ID from route
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null); // Track selected color ID
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track selected image
  const [quantity, setQuantity] = useState<number>(1); // Quantity

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
  
        const transformedProduct = {
          id: data.id,
          name: data.name || "Unnamed Product",
          price: data.price
            ? new Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
              }).format(data.price)
            : "₱0.00",
          category: data.category || "Uncategorized",
          description: data.description || "No description available.",
          colors: data.colors.map((variant: any) => ({
            color: variant.color || "Unknown Color",
            id: variant.id,
            images: variant.images || [],
            sizes: variant.sizes.map((size: any) => ({
              id: size.id,
              label: size.label,
              stock: size.stock || 0,
            })),
          })),
        };
  
        setProduct(transformedProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }
  
    fetchProductDetails();
  }, [id]);
  
  // Use a separate effect to set the default selected color and image
  useEffect(() => {
    if (product?.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0].color);
      setSelectedImage(product.colors[0].images[0] || null);
    }
  }, [product]);
  
  const handleAddToCart = async () => {
    if (!selectedSizeId || !selectedColor || !product) {
      alert("Please select a color and size before adding to cart.");
      return;
    }

    try {
      const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

      if (!userId) {
        alert("User is not logged in. Please log in to add items to the cart.");
        return;
      }

      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          productId: product.id,
          productVariantSizeId: selectedSizeId,
          quantity,
        }),
      });

      if (response.ok) {
        alert("Item added to cart successfully!");
      } else {
        const error = await response.json();
        alert(`Failed to add to cart: ${error.error}`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred while adding to the cart.");
    }
  };

  const getStockColor = (stock: number) => {
    if (stock === 0) return "text-red-500"; // Out of stock
    if (stock <= 5) return "text-orange-500"; // Low stock
    return "text-green-500"; // Ample stock
  };

  const handleAddToWishlist = async () => {
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product?.id,
        }),
      });

      if (response.ok) {
        alert("Item added to wishlist!");
      } else {
        throw new Error("Failed to add item to wishlist");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      alert("Error adding item to wishlist");
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const selectedSize = product.colors
    .find((colorVariant) => colorVariant.color === selectedColor)
    ?.sizes.find((size) => size.id === selectedSizeId);

  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          {selectedImage && (
            <div className="w-[500px] h-[500px]">
              <Image
                src={selectedImage}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          <div className="flex gap-2 mt-4">
            {product.colors
              .find((variant) => variant.color === selectedColor)
              ?.images.map((image, index) => (
                <button
                  key={`image-${index}`} // Ensure uniqueness
                  onClick={() => setSelectedImage(image)}
                  className={`w-16 h-16 rounded border ${
                    selectedImage === image ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Variant ${index}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          <p className="text-xl font-semibold text-gray-900 mb-6">{product.price}</p>

          {/* Colors Section */}
          <div className="mb-6">
            <p className="font-medium mb-2">Color:</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((colorVariant) => (
                <button
                  key={colorVariant.id}
                  className={`px-3 py-1 border rounded-md ${
                    selectedColor === colorVariant.color
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => {
                    setSelectedColor(colorVariant.color); // Set the color name
                    setSelectedColorId(colorVariant.id); // Set the color ID
                    setSelectedImage(colorVariant.images[0] || null); // Set the first image as default
                  }}
                >
                  {colorVariant.color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes Section */}
          <div className="mb-6">
            <p className="font-medium mb-2">Size:</p>
            <div className="flex flex-wrap gap-2">
            {product.colors
  .find((colorVariant) => colorVariant.color === selectedColor)
  ?.sizes.map((size) => (
    <button
      key={`size-${size.id}`} // Ensure uniqueness
      className={`px-3 py-1 border rounded-md ${
        selectedSizeId === size.id
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
      onClick={() => setSelectedSizeId(size.id)}
    >
      {size.label}
    </button>
  ))}

            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <p className="font-medium mb-2">Quantity:</p>
            <div className="flex items-center gap-4">
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="px-4 py-1 border rounded-md">{quantity}</span>
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() =>
                  setQuantity((prev) =>
                    selectedSize && prev < selectedSize.stock ? prev + 1 : prev
                  )
                }
              >
                +
              </button>
            </div>
            <p className={`mt-2 text-sm ${getStockColor(selectedSize?.stock || 0)}`}>
              {selectedSize
                ? `${selectedSize.stock} stock left`
                : "Please select a size to view stock"}
            </p>
          </div>

          <div className="flex gap-4">
            <Button className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <button
              onClick={handleAddToWishlist}
              className="p-2 border rounded-md hover:bg-gray-200"
              title="Add to Wishlist"
            >
              <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Description Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4 border-b pb-4">
            <Image
              src="/placeholder-dark-image.png"
              alt="John Doe"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-sm text-gray-600">★★★★☆ · November 1, 2024</p>
              <p className="text-gray-700 mt-2">
                "Great product! Really happy with the quality."
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-b pb-4">
            <Image
              src="/placeholder-dark-image.png"
              alt="Jane Smith"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold">Jane Smith</p>
              <p className="text-sm text-gray-600">★★★☆☆ · October 28, 2024</p>
              <p className="text-gray-700 mt-2">
                "It's okay, but the size runs a bit small."
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image
              src="/placeholder-dark-image.png"
              alt="Mark Lee"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold">Mark Lee</p>
              <p className="text-sm text-gray-600">★★★★★ · October 20, 2024</p>
              <p className="text-gray-700 mt-2">
                "Absolutely love it! Worth every penny."
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
