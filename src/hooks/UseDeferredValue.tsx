// useDeferredValue is a React Hook used for optimizing UI performance.
//  It defers updating a value to avoid blocking fast updates (like typing).
//  This is useful when handling expensive computations or slow-rendering components.

import { Suspense, useState, useDeferredValue } from "react";

function UseDeferredValue() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const items = [
    "Python",
    "Java",
    "React",
    "IOT",
    "Cyber Security",
    "Networking",
    "UI/UX Design",
  ];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        <input
          type="text"
          className="px-4 py-2 border rounded-lg mb-4 w-64 focus:ring-2 focus:ring-blue-400"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <ul className="w-64 bg-white shadow-md rounded-lg p-2">
          {filteredItems.map((item, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}

export default UseDeferredValue;
