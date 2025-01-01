export type Transaction = {
  id: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  description: string;
  date: string;
};

export type TransactionSummary = {
  totalCredit: number;
  totalDebit: number;
  balance: number;
};

export type MarketPrice = {
  id: string;
  name: string;
  category: string;
  currentPrice: number;
  previousPrice: number;
  unit: string;
  lastUpdated: string;
};