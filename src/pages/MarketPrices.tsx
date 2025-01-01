import React from 'react';
import PriceCard from '../components/market/PriceCard';
import CategoryFilter from '../components/market/CategoryFilter';
import MarketResources from '../components/market/MarketResources';
import { useMarketPrices } from '../hooks/useMarketPrices';
import "../MarketPrices.css";

export default function MarketPrices() {
  const { prices, categories, selectedCategory, setSelectedCategory } = useMarketPrices();

  return (
    <div className="max-full mx-auto px-4 py-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900  shadow-lg text-gray-300">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Market Prices</h2>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prices.map((item) => (
              <PriceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <MarketResources category={selectedCategory} />
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-400 text-center">
        Prices update automatically every 30 seconds
      </p>
    </div>
  );
}
