// EconomicHistory.tsx
import React, { useState } from 'react';
import { economicEvents } from '../data/economicHistory';
import { BookOpen, Search } from 'lucide-react';
import '../economicHistory.css';

const additionalEvents = [
  {
    title: 'Industrial Revolution',
    year: '1760',
    description: 'The transition to new manufacturing processes in Europe and the US.',
    link: 'https://en.wikipedia.org/wiki/Industrial_Revolution'
  },
  {
    title: 'Great Depression',
    year: '1929',
    description: 'The severe worldwide economic depression during the 1930s.',
    link: 'https://en.wikipedia.org/wiki/Great_Depression'
  },
  {
    title: 'Bretton Woods Agreement',
    year: '1944',
    description: 'An international monetary system established after WWII.',
    link: 'https://en.wikipedia.org/wiki/Bretton_Woods_system'
  },
  {
    title: '2008 Financial Crisis',
    year: '2008',
    description: 'A global financial crisis triggered by the collapse of the housing market.',
    link: 'https://en.wikipedia.org/wiki/Financial_crisis_of_2007%E2%80%932008'
  }
];

const generateMockEvents = () => {
  const mockEvents = [];
  for (let i = 1; i <= 16; i++) {
    mockEvents.push({
      title: `Economic Event ${i}`,
      year: (1900 + i).toString(),
      description: `Description for Economic Event ${i}.`,
      link: `https://en.wikipedia.org/wiki/Economic_Event_${i}`
    });
  }
  return mockEvents;
};

const allEvents = [...economicEvents, ...additionalEvents, ...generateMockEvents()];

export default function EconomicHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredEvents = allEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.year.includes(searchQuery)
  );

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="history-page">
      <div className="header">
        <BookOpen className="header-icon" />
        <h2 className="header-title">The History of Economics</h2>
      </div>

      <div className="search-container">
        <div className="search-bar with-background">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search events by title, year, or description..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="cards-container">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event) => (
            <div key={event.year + event.title} className="card">
              <div className="card-header">
                <h3 className="card-title">{event.title}</h3>
                <span className="card-year">{event.year}</span>
              </div>
              <p className="card-description">{event.description}</p>
              <a
                href={event.link || `https://en.wikipedia.org/wiki/${event.title.replace(/\s+/g, '_')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Learn more on Wikipedia →
              </a>
            </div>
          ))
        ) : (
          <p className="no-results">No events found. Try a different search term.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages).keys()].map((_, index) => (
            <button
              key={index}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
