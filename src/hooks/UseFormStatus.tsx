// useFormStatus is a React Hook used for tracking the status of a form submission.
//  It helps manage loading states, disabling buttons while submitting, and showing success/error messages.

import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 rounded-lg ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white font-bold`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function UseFormStatus() {
  const [message, setMessage] = useState("");

  async function handleSubmit(_formData: FormData) {
    setMessage("");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMessage("Form submitted successfully! ✅");
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <form
        action={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <SubmitButton />
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}

export default UseFormStatus;
