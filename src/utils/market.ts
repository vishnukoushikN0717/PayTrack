export function getRandomPriceChange(currentPrice: number, category: string): number {
  // Different volatility for different categories
  const volatility = {
    'Precious Metals': 0.002, // 0.2%
    'Vegetables': 0.05,      // 5%
    'Fuel': 0.001           // 0.1%
  }[category] || 0.01;

  const changePercent = (Math.random() - 0.5) * 2 * volatility;
  const newPrice = currentPrice * (1 + changePercent);
  
  // Round to 2 decimal places
  return Math.round(newPrice * 100) / 100;
}