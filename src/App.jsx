import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </main>
  );
};

export default App;
