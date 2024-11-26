"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Product = {
  id: string;
  name: string;
  rawPrice: number;
  price: string;
  image: string;
  category: string;
  colors: {
    color: string;
    sizes: { id: string; label: string }[];
  }[];
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: { color: string; sizeId: string };
  }>({});
  const router = useRouter();

  // Fetch products data on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        const transformedProducts = data.map((product: any) => ({
          id: product.id || "N/A",
          name: product.name || "Unnamed Product",
          rawPrice: product.price || 0,
          price: product.price
            ? new Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
              }).format(product.price)
            : "₱0.00",
          image: product.image || "/placeholder-dark-image.png",
          category: product.category?.name || "Uncategorized",
          colors: product.ProductVariantColor
            ? product.ProductVariantColor.map((variant: any) => ({
                color: variant.color || "Unknown Color",
                sizes: variant.ProductVariantSize
                  ? variant.ProductVariantSize.map((size: any) => ({
                      id: size.id || "N/A",
                      label: size.size || "Unknown Size",
                    }))
                  : [],
              }))
            : [],
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleAttributeChange = (
    productId: string,
    color?: string,
    sizeId?: string
  ) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [productId]: {
        color: color || prev[productId]?.color || "",
        sizeId: sizeId || prev[productId]?.sizeId || "",
      },
    }));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-14 lg:py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl sm:text-5xl mb-12 font-bold tracking-tighter">
            Shop All
          </h2>

          <div className="flex items-center mb-6 space-x-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg overflow-hidden cursor-pointer"
                onClick={() => router.push(`shop/product-details/${product.id}`)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.category}</p>

                  {/* Colors Section */}
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-2">Color:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((colorVariant) => (
                        <button
                          key={colorVariant.color}
                          className={`px-3 py-1 border rounded-md ${
                            selectedAttributes[product.id]?.color === colorVariant.color
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-800"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click
                            handleAttributeChange(product.id, colorVariant.color);
                          }}
                        >
                          {colorVariant.color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sizes Section */}
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Size:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors
                        .find(
                          (colorVariant) =>
                            colorVariant.color === selectedAttributes[product.id]?.color
                        )
                        ?.sizes.map((size) => (
                          <button
                            key={size.id}
                            className={`px-3 py-1 border rounded-md ${
                              selectedAttributes[product.id]?.sizeId === size.id
                                ? "bg-gray-800 text-white"
                                : "bg-gray-200 text-gray-800"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card click
                              handleAttributeChange(product.id, undefined, size.id);
                            }}
                          >
                            {size.label}
                          </button>
                        ))}
                    </div>
                  </div>

                  <p className="font-bold mt-4">{product.price}</p>
                  <Button
                    className="w-full mt-4"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      const selectedSizeId = selectedAttributes[product.id]?.sizeId;
                      if (!selectedSizeId) {
                        alert("Please select a size before proceeding.");
                        return;
                      }
                      router.push(`shop/product-details/${product.id}`);
                    }}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
