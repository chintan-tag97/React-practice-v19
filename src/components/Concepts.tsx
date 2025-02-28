import { Link } from "react-router-dom";

const Concepts = () => {
  return (
    <div>
      <div className="flex flex-col space-x-4">
        <h1 className="font-bold mb-4">V19 Hooks </h1>
        <Link to="/usetransition" className="hover:text-gray-300">
          1. UseTransition
        </Link>

        <Link to="/useoptimistic" className="hover:text-gray-300">
          2. UseOptimistic
        </Link>
        <Link to="/useactionstate" className="hover:text-gray-300">
          3. UseActionState
        </Link>
        <Link to="/usedeferredvalue" className="hover:text-gray-300">
          4. UseDeferredValue
        </Link>
        <Link to="/useformstatus" className="hover:text-gray-300">
          5. UseFormStatus
        </Link>
        <Link to="/usecontext" className="hover:text-gray-300">
          6. UseContext
        </Link>
      </div>
    </div>
  );
};

export default Concepts;
