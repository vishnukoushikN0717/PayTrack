import React from 'react';
import { ArrowDownCircle, ArrowUpCircle, Wallet } from 'lucide-react';
import type { TransactionSummary } from '../types';

type Props = {
  summary: TransactionSummary;
};

export default function TransactionSummary({ summary }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-primary-600" />
          <h3 className="text-gray-600">Balance</h3>
        </div>
        <p className="text-2xl font-semibold mt-2">₹{summary.balance.toLocaleString()}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <ArrowUpCircle className="w-5 h-5 text-green-600" />
          <h3 className="text-gray-600">Income</h3>
        </div>
        <p className="text-2xl font-semibold mt-2 text-green-600">
          ₹{summary.totalCredit.toLocaleString()}
        </p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <ArrowDownCircle className="w-5 h-5 text-red-600" />
          <h3 className="text-gray-600">Expenses</h3>
        </div>
        <p className="text-2xl font-semibold mt-2 text-red-600">
          ₹{summary.totalDebit.toLocaleString()}
        </p>
      </div>
    </div>
  );
}