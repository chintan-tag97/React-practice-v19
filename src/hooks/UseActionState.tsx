// useActionState is a React Hook that helps manage state transitions based on actions.
// It is useful for handling asynchronous updates, such as form submissions, API calls, or button clicks.

import { useActionState } from "react";

function UseActionState() {
  function incrementAction(state: number) {
    return state + 1;
  }

  const [count, dispatch] = useActionState(incrementAction, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => dispatch()}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default UseActionState;
