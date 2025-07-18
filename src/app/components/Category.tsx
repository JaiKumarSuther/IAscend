
"use client";

import { useState, useMemo } from "react";
import { ArrowLeft, Search, X } from "lucide-react";
import { categories } from "@/Utils/dummy";

export function SelectCategory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Astrology",
    "Counseling",
    "Massage",
    "Meditation",
    "Tarot",
  ]);

  // Memoized filtered categories for better performance
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    return categories.filter(
      (category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleContinue = () => {
    console.log("Selected categories:", selectedCategories);
    // Add navigation logic here
  };

  return (
    <main className="border-2 min-h-screen bg-gray-50">
       <div className="flex items-center pl-4 pt-6 text-black cursor-pointer  hover:text-[#D12498]">
          <button className="rounded-full transition-colors hover:bg-gray-100 w-8 h-8 flex items-center justify-center">
            <ArrowLeft
              size={18}
              className=""
            />
          </button>
          <h1 className="text-lg font-semibold">
            Setup Interests
          </h1>
        </div>

      <div className="flex flex-col items-center justify-center w-full container mx-auto px-4 py-6">
        {/* Header */}
       
        {/* Main Content */}
        <div className="space-y-6 max-w-4xl">
          {/* Title Section */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#18151A]">
              Choose Category
            </h2>
            <p className="text-sm text-[#4C484E]">
              What are your specialities?
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-[725px] mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Categories..."
              className="w-full h-10 pl-4  pr-16 rounded-lg border border-[#D4D3D5] focus:outline-none focus:ring-2 focus:ring-[#D12498] focus:border-transparent text-black placeholder-[#716E72] text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={14} className="text-gray-400" />
                </button>
              )}
              <Search size={16} className="text-black" />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {filteredCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.name)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-sm
                    ${
                      selectedCategories.includes(category.name)
                        ? "bg-[#27222A] text-white shadow-md"
                        : "border border-[#E9E9EA] text-[#827F83] hover:bg-gray-100"
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* No results message */}
            {filteredCategories.length === 0 && searchQuery && (
              <div className="text-center py-8">
                <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search size={20} className="text-gray-400" />
                </div>
                <p className="text-gray-500 text-base">
                  No categories found for &quot;{searchQuery}&quot;
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Try searching with different keywords
                </p>
              </div>
            )}
          </div>

  

          {/* Continue Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={handleContinue}
              disabled={selectedCategories.length === 0}
              className={`
                w-full max-w-sm h-11 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300
                ${
                  selectedCategories.length > 0
                    ? "bg-gradient-to-r from-[#D42066] to-[#D12498] text-white hover:brightness-110 hover:shadow-md hover:scale-[1.02] cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              Continue{" "}
              {selectedCategories.length > 0
                ? `(${selectedCategories.length})`
                : ""}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
