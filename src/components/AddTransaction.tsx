import React, { useState } from 'react';
import type { Transaction } from '../types';

type Props = {
  onAdd: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
};

export default function AddTransaction({ onAdd }: Props) {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'credit' | 'debit'>('credit');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !description) return;

    onAdd({
      amount: parseFloat(amount),
      type,
      category,
      description,
    });

    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-black font-semibold mb-4">Add Transaction</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-black"
            placeholder="Enter amount"
            required
          />

        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as 'credit' | 'debit')}
            className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-black"
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-black"
            placeholder="e.g., Food, Transport, Salary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-black"
            placeholder="Enter description"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}