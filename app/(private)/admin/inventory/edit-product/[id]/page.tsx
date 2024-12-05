"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Size {
  id: string;
  label: string;
  stock: number;
  status: string;
}

interface Color {
  color: string;
  images: string[]; // Array of image URLs for this variant
  sizes: Size[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  colors: Color[];
}

interface Category {
  id: string;
  name: string;
}

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false); // To track image upload status

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`/api/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }

    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [id]);

  const handleSaveProduct = async () => {
    if (!product) return;

    try {
      if (!product.name.trim()) {
        alert("Product name is required.");
        return;
      }

      if (!product.category) {
        alert("Please select a category.");
        return;
      }

      if (isNaN(Number(product.price)) || Number(product.price) <= 0) {
        alert("Please enter a valid price.");
        return;
      }

      const updatedProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        colors: product.colors,
      };

      setLoading(true);

      const response = await axios.put(`/api/products/${id}`, updatedProduct);

      if (response.status === 200) {
        alert("Product updated successfully!");
        router.push("/admin/inventory");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save the product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    variantIndex: number
  ) => {
    const files = e.target.files;
    if (!files || !product) return;

    try {
      setUploading(true);

      const formData = new FormData();
      Array.from(files).forEach((file) => formData.append("images", file));

      const response = await axios.post(
        `/api/products/${product.id}/upload-images`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const updatedColors = [...product.colors];
      updatedColors[variantIndex].images.push(...response.data.images);
      setProduct({ ...product, colors: updatedColors });

      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (variantIndex: number, imageIndex: number) => {
    if (!product) return;

    const updatedColors = [...product.colors];
    updatedColors[variantIndex].images.splice(imageIndex, 1);
    setProduct({ ...product, colors: updatedColors });
  };

  if (!id) {
    return <p>Error: Product ID is missing.</p>;
  }

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found or failed to load.</p>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Edit Product</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: +e.target.value })
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Variants */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Variants</label>
                {product.colors.map((variant, variantIndex) => (
                  <div key={variantIndex} className="border rounded-md p-4 mb-4">
                    {/* Variant Color */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Variant Color
                      </label>
                      <input
                        type="text"
                        value={variant.color}
                        onChange={(e) => {
                          const updatedColors = [...product.colors];
                          updatedColors[variantIndex].color = e.target.value;
                          setProduct({ ...product, colors: updatedColors });
                        }}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>

                    {/* Images */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Images
                      </label>
                      <div className="flex gap-4 flex-wrap">
                        {variant.images.map((image, imageIndex) => (
                          <div key={imageIndex} className="relative">
                            <Image
                              src={image}
                              alt={`Variant ${variant.color}`}
                              className="w-24 h-24 object-cover rounded-md"
                              width={96}
                              height={96}
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-1 right-1"
                              onClick={() => handleRemoveImage(variantIndex, imageIndex)}
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                      <input
                        type="file"
                        multiple
                        className="mt-2"
                        onChange={(e) => handleImageUpload(e, variantIndex)}
                      />
                    </div>

                    {/* Sizes Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sizes and Stock</label>
                      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {variant.sizes.map((size, sizeIndex) => (
                            <tr key={size.id} className="odd:bg-white even:bg-gray-50">
                              {/* Size Dropdown */}
                              <td className="border border-gray-300 px-4 py-2">
                                <select
                                  value={size.label}
                                  onChange={(e) => {
                                    const updatedColors = [...product.colors];
                                    updatedColors[variantIndex].sizes[sizeIndex].label = e.target.value;
                                    setProduct({ ...product, colors: updatedColors });
                                  }}
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                  <option value="" disabled>Select Size</option>
                                  <option value="XS">XS</option>
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="L">L</option>
                                  <option value="XL">XL</option>
                                </select>
                              </td>

                              {/* Stock Input */}
                              <td className="border border-gray-300 px-4 py-2">
                                <input
                                  type="number"
                                  value={size.stock}
                                  onChange={(e) => {
                                    const updatedColors = [...product.colors];
                                    updatedColors[variantIndex].sizes[sizeIndex].stock = +e.target.value;
                                    setProduct({ ...product, colors: updatedColors });
                                  }}
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                  placeholder="Stock"
                                  required
                                />
                              </td>

                              {/* Status Dropdown */}
                              <td className="border border-gray-300 px-4 py-2">
                                <select
                                  value={size.status}
                                  onChange={(e) => {
                                    const updatedColors = [...product.colors];
                                    updatedColors[variantIndex].sizes[sizeIndex].status = e.target.value;
                                    setProduct({ ...product, colors: updatedColors });
                                  }}
                                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                  <option value="Active">Active</option>
                                  <option value="Out of Stock">Out of Stock</option>
                                </select>
                              </td>

                              {/* Remove Button */}
                              <td className="border border-gray-300 px-4 py-2">
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => {
                                    const updatedColors = [...product.colors];
                                    updatedColors[variantIndex].sizes.splice(sizeIndex, 1);
                                    setProduct({ ...product, colors: updatedColors });
                                  }}
                                >
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Add New Size Button */}
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          const updatedColors = [...product.colors];
                          updatedColors[variantIndex].sizes.push({ id: Date.now().toString(), label: "", stock: 0, status: "Active" });
                          setProduct({ ...product, colors: updatedColors });
                        }}
                      >
                        Add Size
                      </Button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={handleSaveProduct}
                  disabled={loading || uploading}
                >
                  {loading || uploading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
