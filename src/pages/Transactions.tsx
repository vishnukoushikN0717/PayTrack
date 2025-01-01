import React, { useState } from 'react';
import type { Transaction, TransactionSummary } from '../types';
import TransactionList from '../components/TransactionList';
import TransactionSummary from '../components/TransactionSummary';
import AddTransaction from '../components/AddTransaction';
import '../Transactions.css';

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      amount: 50000,
      type: 'credit',
      category: 'Salary',
      description: 'Monthly salary',
      date: '2024-03-01',
    },
    {
      id: '2',
      amount: 2000,
      type: 'debit',
      category: 'Food',
      description: 'Grocery shopping',
      date: '2024-03-02',
    },
  ]);

  const summary: TransactionSummary = transactions.reduce(
    (acc, curr) => ({
      totalCredit: acc.totalCredit + (curr.type === 'credit' ? curr.amount : 0),
      totalDebit: acc.totalDebit + (curr.type === 'debit' ? curr.amount : 0),
      balance: acc.balance + (curr.type === 'credit' ? curr.amount : -curr.amount),
    }),
    { totalCredit: 0, totalDebit: 0, balance: 0 }
  );

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id' | 'date'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
    };
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6 animate-fade-in-down">
          <h1 className="text-3xl font-bold">PayTrack</h1>
        </div>
        <div className="grid grid-cols-3 gap-8 animate-fade-in-up">
          <div className="p-6 bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-bold">Balance</h3>
            <p className="text-3xl font-extrabold">₹{summary.balance.toLocaleString()}</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-bold">Income</h3>
            <p className="text-3xl font-extrabold">₹{summary.totalCredit.toLocaleString()}</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-bold">Expenses</h3>
            <p className="text-3xl font-extrabold">₹{summary.totalDebit.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 mt-16 animate-fade-in">
          <div className="col-span-2 bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
            <TransactionList transactions={transactions} itemClassName="text-blue-400" />
          </div>

          <div className="col-span-1 p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold mb-6">Add Transaction</h2>
            <AddTransaction onAdd={handleAddTransaction} inputClassName="text-blue-400 placeholder-gray-600" />
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 mt-16 py-6 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Info</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:vishnukoushikn@gmail.com" className="text-blue-400 hover:text-blue-600">vishnukoushikn@gmail.com</a></li>
              <li>Phone: +91-1234567890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">About</h3>
            <p className="text-sm">PayTrack helps you manage your finances efficiently with an easy-to-use interface and detailed transaction tracking.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">&copy; 2024 PayTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}
