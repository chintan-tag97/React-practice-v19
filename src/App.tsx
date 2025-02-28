import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import React, { Suspense } from "react";
import UseTransition from "./hooks/UseTransition";
import UseOptimistic from "./hooks/UseOptimistic";
import Concepts from "./components/Concepts";
import UseDeferredValue from "./hooks/UseDeferredValue";
import UseActionState from "./hooks/UseActionState";
import UseFormStatus from "./hooks/UseFormStatus";
import UseContext from "./hooks/UseContext";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/concepts" element={<Concepts />} />

          <Route path="/usetransition" element={<UseTransition />} />
          <Route path="/useoptimistic" element={<UseOptimistic />} />
          <Route path="/usedeferredvalue" element={<UseDeferredValue />} />
          <Route path="/useactionstate" element={<UseActionState />} />

          <Route path="/useformstatus" element={<UseFormStatus />} />
          <Route path="/usecontext" element={<UseContext />} />

        </Routes>
      </Suspense>
    </Router>
  );
}
