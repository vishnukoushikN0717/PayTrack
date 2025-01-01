import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet, LineChart, Bot, BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-400 p-3 rounded-full shadow-md">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-100">PayTrack</span>
          </div>

          {/* Navigation - Right Aligned */}
          <nav className="flex items-center space-x-8">
            {[
              { to: "/about", icon: Wallet, label: "About" },
              { to: "/", icon: LineChart, label: "Transactions" },
              { to: "/market", icon: LineChart, label: "Market Prices" },
              { to: "/ai", icon: Bot, label: "AI Assistant" },
              { to: "/history", icon: BookOpen, label: "History" }
            ].map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${isActive
                    ? 'bg-blue-400 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`
                }
              >
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative font-medium">
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white opacity-0 transform transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
