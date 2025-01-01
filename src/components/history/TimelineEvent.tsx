import React from 'react';

type Props = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineEvent({ year, title, description }: Props) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-primary-200 last:border-l-0 fade-in">
      <div className="timeline-dot" />
      <div className="gradient-card p-4 rounded-lg">
        <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
          {year}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}