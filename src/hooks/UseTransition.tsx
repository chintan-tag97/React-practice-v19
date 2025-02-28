// useTransition is a React Hook that helps manage UI state when performing slow or expensive updates.
// It allows marking certain updates as non-blocking, keeping the UI responsive while the
//  update processes in the background.
// useTransition is a React Hook that lets you render a part of the UI in the background.

import { useTransition, useState } from "react";

function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold">Count: {count}</h1>
        <button
          className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          onClick={handleClick}
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Increment"}
        </button>
      </div>
    </div>
  );
}
export default UseTransition;

// import { useState, useTransition } from "react";

//  function UseTransition() {
//   const [query, setQuery] = useState(""); // User input
//   const [filteredItems, setFilteredItems] = useState<string[]>([]); // Filtered list
//   const [isPending, startTransition] = useTransition(); // Manage transition state

//   const items = ["Apple", "Banana", "Cherry", "Grapes", "Mango", "Orange"];

//   function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
//     setQuery(e.target.value); // Update input instantly

//     startTransition(() => {
//       // Expensive filtering marked as non-blocking
//       setFilteredItems(
//         items.filter((item) =>
//           item.toLowerCase().includes(e.target.value.toLowerCase())
//         )
//       );
//     });
//   }

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
//       <input
//         type="text"
//         className="px-4 py-2 border rounded-lg mb-4 w-64 focus:ring-2 focus:ring-blue-400"
//         placeholder="Search..."
//         value={query}
//         onChange={handleSearch}
//       />

//       {isPending && <p className="text-gray-500">Filtering...</p>}

//       <ul className="w-64 bg-white shadow-md rounded-lg p-2">
//         {filteredItems.map((item, index) => (
//           <li key={index} className="p-2 border-b last:border-b-0">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UseTransition
