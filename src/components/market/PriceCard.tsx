import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { MarketPrice } from '../../types';

type Props = {
  item: MarketPrice;
};

export default function PriceCard({ item }: Props) {
  const priceChange = (item.currentPrice - item.previousPrice);
  const percentageChange = (priceChange / item.previousPrice) * 100;
  const isPositive = priceChange >= 0;

  return (
    <div className="price-card rounded-lg shadow-md p-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 text-gray-300 transition-transform transform hover:scale-105">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <p className="text-sm text-gray-400">{item.category}</p>
        </div>
        {isPositive ? (
          <TrendingUp className="w-5 h-5 text-green-400 animate-bounce" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-400 animate-bounce" />
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            ₹{item.currentPrice.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400">per {item.unit}</span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{priceChange.toFixed(2)} ({percentageChange.toFixed(2)}%)
          </span>
          <span className="text-sm text-gray-400">vs yesterday</span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        Last updated: {new Date(item.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}
