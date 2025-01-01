import React from 'react';
import { Filter, X } from 'lucide-react';

type Props = {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-300">Filter by:</span>
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category === selectedCategory ? null : category)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 shadow-sm ${category === selectedCategory
                ? 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
          >
            {category}
          </button>
        ))}

        {selectedCategory && (
          <button
            onClick={() => onSelectCategory(null)}
            className="p-1.5 bg-gray-700 text-gray-400 hover:text-white hover:bg-gray-600 rounded-full transition-all duration-300"
            title="Clear filter"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
