import { useState, useEffect } from 'react';
import type { MarketPrice } from '../types';
import { getRandomPriceChange } from '../utils/market';
import { INITIAL_MARKET_DATA } from '../data/marketData';

export function useMarketPrices() {
  const [prices, setPrices] = useState<MarketPrice[]>(INITIAL_MARKET_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Simulate real-time price updates every 30 seconds
    const interval = setInterval(() => {
      setPrices(currentPrices => 
        currentPrices.map(price => ({
          ...price,
          previousPrice: price.currentPrice,
          currentPrice: getRandomPriceChange(price.currentPrice, price.category),
          lastUpdated: new Date().toISOString()
        }))
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const filteredPrices = selectedCategory
    ? prices.filter(price => price.category === selectedCategory)
    : prices;

  const categories = Array.from(new Set(prices.map(price => price.category)));

  return {
    prices: filteredPrices,
    categories,
    selectedCategory,
    setSelectedCategory
  };
}