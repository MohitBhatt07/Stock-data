import React, { useState } from 'react';
import StockSelect from './components/StockSelect';
import StockDataTable from './components/StockDataTable';
import Pagination from './components/Pagination';
import stockData from './data/stockData';

const App = () => {
  const [selectedStock, setSelectedStock] = useState('Macrosoft');
  const [daysToShow, setDaysToShow] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleStockChange = (stock) => {
    setSelectedStock(stock);
    setCurrentPage(1);
  };

  const handleDaysToShowChange = (days) => {
    setDaysToShow(days);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getStockData = () => {
    const selectedStockData = stockData.find(
      (stock) => stock.stockName === selectedStock
    );
    return selectedStockData.info;
  };

  const getDataToDisplay = () => {
    const stockData = getStockData();
    const startIndex = (currentPage - 1) * daysToShow;
    const endIndex = startIndex + daysToShow;
    return stockData.slice(startIndex, endIndex);
  };

  const getPageCount = () => {
    const stockData = getStockData();
    return Math.ceil(stockData.length / daysToShow);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 md:mt-20 bg-inherit">
      <h1 className="text-3xl font-bold mb-8 text-orange-400 [text-shadow:_4px_4px_10px_rgb(255_255_255_/_40%)]">Stock Data</h1>
      <div className="w-full max-w-md bg-violet-600 opacity-85 shadow-lg rounded-lg p-6">
        <StockSelect
          stocks={stockData}
          selectedStock={selectedStock}
          onStockChange={handleStockChange}
        />
        <StockDataTable data={getDataToDisplay()} currentPage={currentPage} />
        <Pagination
          currentPage={currentPage}
          pageCount={getPageCount()}
          onPageChange={handlePageChange}
          daysToShow={daysToShow}
          onDaysToShowChange={handleDaysToShowChange}
          
        />
      </div>
    </div>
  );
};

export default App;