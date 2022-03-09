import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Loading } from "./components/Loading/Loading";
import { Hero } from "./components/Main/Hero";
import { Projects } from "./components/Projects/Projects";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App w-screen h-screen font-poppins">
      <AnimatePresence>
        {loading && <Loading key="loading" setLoading={setLoading} />}
      </AnimatePresence>
      {!loading && (
        <React.Fragment>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
