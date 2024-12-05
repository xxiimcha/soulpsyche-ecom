"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AVAILABLE_SIZES = ["S", "M", "L", "XL", "XXL"];

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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

  const handleVariantImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    variantIndex: number
  ) => {
    const files = e.target.files;
    if (!files) return;

    const updatedVariants = [...(product?.variants || [])];
    const newImages = [...updatedVariants[variantIndex].images];

    for (let i = 0; i < files.length; i++) {
     
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "so8qqjk3");

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dwa4rcjan/image/upload`,
          formData
        );
        newImages.push(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image.");
      }
    }

    updatedVariants[variantIndex].images = newImages;
    setProduct({ ...product, variants: updatedVariants });
  };

  const removeVariantImage = (variantIndex: number, imageIndex: number) => {
    if (!product) return;

    const updatedVariants = [...product.variants];
    updatedVariants[variantIndex].images.splice(imageIndex, 1);
    setProduct({ ...product, variants: updatedVariants });
  };

  const handleSaveProduct = async () => {
    if (!product) return;

    try {
      if (!product.name.trim()) {
        alert("Product name is required.");
        return;
      }

      const slug = product.name.toLowerCase().replace(/ /g, "-");
      const updatedProduct = { ...product, slug };

      setLoading(true);
      await axios.put(`/api/products/update/${id}`, updatedProduct);

      alert("Product updated successfully!");
      router.push("/admin/inventory");
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save the product.");
    } finally {
      setLoading(false);
    }
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

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={product.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                />
              </div>

              {/* Variants */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Variants</label>
                {Array.isArray(product.variants) && product.variants.length > 0 ? (
                  product.variants.map((variant: { color: string; images: string[] }, variantIndex: number) => (
                    <div key={variantIndex} className="border rounded-md p-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Variant Color
                        </label>
                        <input
                          type="text"
                          value={variant.color}
                          onChange={(e) => {
                            const updatedVariants = [...product.variants];
                            updatedVariants[variantIndex].color = e.target.value;
                            setProduct({ ...product, variants: updatedVariants });
                          }}
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>

                      {/* Images */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mt-4">
                          Upload Images
                        </label>
                        <input
                          type="file"
                          multiple
                          onChange={(e) => handleVariantImageUpload(e, variantIndex)}
                          className="block w-full mt-1"
                        />
                        <div className="flex space-x-2 mt-2">
                          {variant.images &&
                            variant.images.map((image, imageIndex) => (
                              <div key={imageIndex} className="relative w-32 h-32">
                                <Image
                                  src={image}
                                  alt={`Variant Image ${imageIndex + 1}`}
                                  className="w-full h-full object-cover"
                                  width={128}
                                  height={128}
                                />
                                <button
                                  type="button"
                                  onClick={() => removeVariantImage(variantIndex, imageIndex)}
                                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                >
                                  X
                                </button>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No variants available. Add one to get started.</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={handleSaveProduct}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
