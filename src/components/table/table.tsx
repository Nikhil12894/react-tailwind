// Table.js

import { useState } from "react";

const Table = ({ data, pageSize = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterText, setFilterText] = useState("");

  // Sorting function
  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Filtering function
  const filteredData = sortedData.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(filterText.toLowerCase())
    )
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  return (
    <div className="overflow-x-auto">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filter..."
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <table className="min-w-full divide-y divide-gray-200 ">
        {/* Table headers */}
        <thead className="">
          <tr>
            <th
              onClick={() => setSortBy("id")}
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
            >
              ID
            </th>
            <th
              onClick={() => setSortBy("name")}
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
            >
              Name
            </th>
            <th
              onClick={() => setSortBy("email")}
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
            >
              Email
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="divide-y divide-gray-200">
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-between mt-4 ">
        <button
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
