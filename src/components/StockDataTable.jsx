import React from 'react';

const StockDataTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Open</th>
            <th className="px-4 py-2">Close</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`hover:bg-blue-200 hover:cursor-pointer  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
            >
              <td className="px-4 py-2">{item.date}</td>
              <td
                className={`px-4 py-2 ${
                  item.open >
                  (index > 0 ? data[index - 1].close : 0)
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {item.open}
              </td>
              <td
                className={`px-4 py-2 ${
                  item.close > item.open ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {item.close}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDataTable;