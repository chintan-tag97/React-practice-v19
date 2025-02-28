// useOptimistic is a React Hook that provides an optimistic UI update before the actual update is confirmed.
// This is useful for improving user experience by showing instant feedback (like updating a UI before an API response).

import { useOptimistic, useState } from "react";

function UseOptimistic() {
  const [likes, setLikes] = useState(10);
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (state, newLike) => state + newLike
  );

  const handleLike = async () => {
    addOptimisticLike(1);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLikes((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Optimistic Likes</h1>
        <p className="mt-2 text-lg text-gray-700">Likes: {optimisticLikes}</p>
        <button
          className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          onClick={handleLike}
        >
          Like
        </button>
      </div>
    </div>
  );
}

export default UseOptimistic;
