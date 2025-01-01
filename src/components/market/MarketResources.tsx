import React from 'react';
import { ExternalLink, Newspaper, TrendingUp, Info } from 'lucide-react';

type ResourceLink = {
  title: string;
  url: string;
  icon: React.ReactNode;
  description: string;
};

const resources: Record<string, ResourceLink[]> = {
  'Precious Metals': [
    {
      title: 'Gold Price Live',
      url: 'https://goldprice.org/live-gold-price.html',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Real-time gold price updates',
    },
    {
      title: 'Kitco News',
      url: 'https://www.kitco.com/news/',
      icon: <Newspaper className="w-5 h-5" />,
      description: 'Latest precious metals news',
    },
  ],
  Vegetables: [
    {
      title: 'Agmarket India',
      url: 'https://agmarknet.gov.in/',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Daily vegetable prices across India',
    },
    {
      title: 'Market Analysis',
      url: 'https://farmer.gov.in/market.aspx',
      icon: <Info className="w-5 h-5" />,
      description: 'Government market analysis',
    },
  ],
  Fuel: [
    {
      title: 'Daily Fuel Prices',
      url: 'https://www.petroldieselprice.com/',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'City-wise fuel rates',
    },
    {
      title: 'Petroleum Planning',
      url: 'https://www.ppac.gov.in/',
      icon: <Info className="w-5 h-5" />,
      description: 'Official price and policy updates',
    },
  ],
};

type Props = {
  category: string | null;
};

export default function MarketResources({ category }: Props) {
  const relevantResources = category ? resources[category] : [];

  if (!category || !relevantResources) return null;

  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-md p-6 text-gray-300">
      <h3 className="text-lg font-semibold text-white mb-4">Resources for {category}</h3>
      <div className="space-y-4">
        {relevantResources.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <div className="text-primary-600">{resource.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">{resource.title}</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-400">{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
