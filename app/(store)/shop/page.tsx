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

type Category = {
  id: string;
  name: string;
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: { color: string; sizeId: string };
  }>({});
  const router = useRouter();

  // Fetch categories and products data on mount
  useEffect(() => {
    async function fetchCategoriesAndProducts() {
      try {
        // Fetch categories
        const categoryResponse = await fetch("/api/categories");
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        // Fetch products
        const productResponse = await fetch("/api/products");
        const productData = await productResponse.json();

        const transformedProducts = productData.map((product: any) => ({
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
          category: product.categoryName || "Uncategorized",
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
        console.error("Error fetching categories or products:", error);
      }
    }

    fetchCategoriesAndProducts();
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId) // Remove if already selected
        : [...prev, categoryId] // Add if not selected
    );
  };

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

  const handleBuyNow = (productId: string) => {
    const selectedSizeId = selectedAttributes[productId]?.sizeId;

    if (!selectedSizeId) {
      alert("Please select a size before proceeding.");
      return;
    }

    // Navigate to product details page
    router.push(`/shop/product-details/${productId}`);
  };

  // Filter products based on search term, selected categories, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesPrice =
      (minPrice === null || product.rawPrice >= minPrice) &&
      (maxPrice === null || product.rawPrice <= maxPrice);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-14 lg:py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl sm:text-5xl mb-12 font-bold tracking-tighter">
            Shop
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Filter Section */}
            <aside className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4">Filters</h3>
              <div className="space-y-6">
                {/* Search Filter */}
                <div>
                  <h4 className="font-medium mb-2">Search</h4>
                  <Input
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="font-medium mb-2">Category</h4>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => handleCategoryChange(category.name)}
                          className="form-checkbox h-4 w-4"
                        />
                        <label
                          htmlFor={`category-${category.id}`}
                          className="text-gray-700"
                        >
                          {category.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="font-medium mb-2">Price</h4>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minPrice || ""}
                      onChange={(e) =>
                        setMinPrice(e.target.value ? parseInt(e.target.value, 10) : null)
                      }
                      className="w-24"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice || ""}
                      onChange={(e) =>
                        setMaxPrice(e.target.value ? parseInt(e.target.value, 10) : null)
                      }
                      className="w-24"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border rounded-lg overflow-hidden cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full object-cover"
                    onClick={() =>
                      router.push(`/shop/product-details/${product.id}`)
                    }
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
                              selectedAttributes[product.id]?.color ===
                              colorVariant.color
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
                              colorVariant.color ===
                              selectedAttributes[product.id]?.color
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
                        handleBuyNow(product.id);
                      }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
