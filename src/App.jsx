import "./App.css";
import About from "./public/layers/About";
import Footer from "./public/layers/Footer";
import Header from "./public/layers/Header";
import Hero from "./public/layers/Hero";
import HowItWorks from "./public/layers/HowItWorks";
import Team from "./public/layers/Team";

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
