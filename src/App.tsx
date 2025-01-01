import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Transactions from './pages/Transactions';
import MarketPrices from './pages/MarketPrices';
import FinanceAI from './pages/FinanceAI';
import EconomicHistory from './pages/EconomicHistory';
import About from './components/About/About';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/market" element={<MarketPrices />} />
          <Route path="/About" element={<About />} />
          <Route path="/ai" element={<FinanceAI />} />
          <Route path="/history" element={<EconomicHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}