import "./App.css";
import About from "./assets/layers/About";
import Footer from "./assets/layers/Footer";
import Header from "./assets/layers/Header";
import Hero from "./assets/layers/Hero";
import HowItWorks from "./assets/layers/HowItWorks";
import Team from "./assets/layers/Team";

function App() {
  return (
    <div className="max-w-[1440px] relative mx-auto">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
