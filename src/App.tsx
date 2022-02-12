import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Loading } from "./components/Loading/Loading";
import { Hero } from "./components/Main/Hero";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="App w-screen h-screen font-poppins">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
