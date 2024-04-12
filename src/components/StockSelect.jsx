import React from 'react';

const StockSelect = ({ stocks, selectedStock, onStockChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="stockSelect" className="block font-medium mb-2">
        Select Stock:
      </label>
      <select
        id="stockSelect"
        value={selectedStock}
        onChange={(e) => onStockChange(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {stocks.map((stock) => (
          <option key={stock.stockName} value={stock.stockName}>
            {stock.stockName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelect;