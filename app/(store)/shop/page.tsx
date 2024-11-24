"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Product = {
  id: string;
  name: string;
  rawPrice: number; // Add rawPrice here
  price: number;
  image: string;
  category: string;
  colors: {
    color: string;
    sizes: string[];
  }[];
};

const categories = ["All", "Tops", "Bottoms", "Footwear", "Outerwear", "Dresses"];
const colors = ["All", "White", "Blue", "Black", "Gray", "Brown", "Multicolor"];
const sizes = ["All", "S", "M", "L", "XL", "32", "10"];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");

  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
	// Fetch products from your API or database
	async function fetchProducts() {
	  try {
		const response = await fetch("/api/products");
		const data = await response.json();
  
		console.log("API Response:", data); // Debugging: Log the API response
  
		// Ensure the data matches the expected structure
		const transformedProducts = data.map((product: any) => ({
			id: product.id || "N/A",
			name: product.name || "Unnamed Product",
			rawPrice: product.price || 0, // Keep raw price for sorting
			price: product.price
			  ? new Intl.NumberFormat("en-PH", {
				  style: "currency",
				  currency: "PHP",
				}).format(product.price)
			  : "₱0.00", // Formatted price for display
			image: product.image || "/placeholder-dark-image.png", // Replace with default image if none provided
			category: product.category?.name || "Uncategorized",
			colors: product.ProductVariantColor
			  ? product.ProductVariantColor.map((variant: any) => ({
				  color: variant.color || "Unknown Color",
				  sizes: variant.ProductVariantSize
					? variant.ProductVariantSize.map((size: any) => size.size || "Unknown Size")
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

  const filteredProducts = products
	.filter(
		(product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
		(selectedCategory === "All" || product.category === selectedCategory) &&
		(selectedColors.length === 0 ||
			selectedColors.includes("All") ||
			product.colors.some((c) => selectedColors.includes(c.color))) &&
		(selectedSizes.length === 0 ||
			selectedSizes.includes("All") ||
			product.colors.some((c) =>
			c.sizes.some((size) => selectedSizes.includes(size))
			))
	)
	.sort((a, b) => {
		if (sortBy === "name") return a.name.localeCompare(b.name);
		if (sortBy === "price_asc") return a.rawPrice - b.rawPrice; // Sort by raw price
		if (sortBy === "price_desc") return b.rawPrice - a.rawPrice; // Sort by raw price
		return 0;
	});

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleAddToCart = async (productId: string, color: string, size: string) => {
	try {
	  const userId = "user_2ob9EitQ5Ab58IyHysuDka4Sv83"; // Replace with the actual user ID
	  const quantity = 1; // Default quantity to add
  
	  // Send POST request to add the item to the cart
	  const response = await fetch("/api/cart/add", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
		  userId,
		  productId,
		  productVariantSizeId: size, // Use the selected size as the productVariantSizeId
		  quantity,
		}),
	  });
  
	  if (response.ok) {
		const data = await response.json();
		alert("Item added to cart successfully!");
	  } else {
		throw new Error("Failed to add item to cart");
	  }
	} catch (error) {
	  console.error("Error adding to cart:", error);
	  alert("Error adding item to cart");
	}
  };
  
  

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSize((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };
  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-14 lg:py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl sm:text-5xl mb-12 font-bold tracking-tighter">
            Shop All
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 bg-white"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:space-x-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Category" className="bg-white" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
				<SelectTrigger className="w-[180px] bg-white">
					<SelectValue placeholder="Sort by" className="bg-white" />
				</SelectTrigger>
				<SelectContent className="bg-white">
					<SelectItem value="name">Name</SelectItem>
					<SelectItem value="price_asc">Price: Low to High</SelectItem>
					<SelectItem value="price_desc">Price: High to Low</SelectItem>
				</SelectContent>
				</Select>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Refine your product search
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Colors</h3>
                      {colors.map((color) => (
                        <div
                          key={color}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`color-${color}`}
                            checked={selectedColors.includes(color)}
                            onCheckedChange={() => handleColorToggle(color)}
                          />
                          <Label htmlFor={`color-${color}`}>{color}</Label>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Sizes</h3>
                      {sizes.map((size) => (
                        <div
                          key={size}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`size-${size}`}
                            checked={selectedSizes.includes(size)}
                            onCheckedChange={() => handleSizeToggle(size)}
                          />
                          <Label htmlFor={`size-${size}`}>{size}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) =>
              product.colors.map((variant, variantIndex) => (
                <div
                  key={`${product.id}-${variant.color}-${variantIndex}`}
                  className="bg-white border rounded-lg overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-sm text-gray-600">
                      Color: {variant.color}
                    </p>
					<div className="mt-2">
					<label className="block text-sm font-medium">Size:</label>
					<Select
						onValueChange={(size) => handleSizeChange(product.id, size)}
					>
						<SelectTrigger className="w-full mt-1">
						<SelectValue placeholder={selectedSize[product.id] || "Select size"} />
						</SelectTrigger>
						<SelectContent>
						{variant.sizes.map((size) => (
							<SelectItem key={size} value={size}>
							{size}
							</SelectItem>
						))}
						</SelectContent>
					</Select>
					</div>

                    <p className="font-bold mt-2">{product.price}</p>
                    <Button
						className="w-full mt-4"
						onClick={() => {
							const size = selectedSize[product.id]; // Get the selected size for the product
							if (!size) {
							alert("Please select a size before adding to cart.");
							return;
							}
							handleAddToCart(product.id, variant.color, size); // Pass the selected size
						}}
					>
					Add to Cart
					</Button>


                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
